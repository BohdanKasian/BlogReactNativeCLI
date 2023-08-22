import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { AccessToken, LoginManager } from "react-native-fbsdk-next";
import appleAuth from "@invertase/react-native-apple-authentication";
import { fbAuthFunc, mainFirebase } from "../../App";

export async function onGoogleButtonPress() {
  // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  return fbAuthFunc.signInWithCredential(googleCredential);
}

export async function onFacebookButtonPress() {
  return LoginManager.logInWithPermissions(["public_profile", "email"])
    .then(function (result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        return AccessToken.getCurrentAccessToken().then((data) => {
          const FacebookAuthCredential = mainFirebase.auth.FacebookAuthProvider.credential(
            data?.accessToken.toString() || ""
          );
          return fbAuthFunc.signInWithCredential(FacebookAuthCredential);
        });
      }
    })
    .catch((err) => {
      console.log(err, "reason");
    });
}

/**
 * Note the sign in request can error, e.g. if the user cancels the sign-in.
 * Use `appleAuth.Error` to determine the type of error, e.g. `error.code === appleAuth.Error.CANCELED`
 */
export async function onAppleButtonPress() {
  // 1). start a apple sign-in request
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: appleAuth.Operation.LOGIN,
    requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
  });

  // 2). if the request was successful, extract the token and nonce
  const { identityToken, nonce } = appleAuthRequestResponse;
  const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

  // use credentialState response to ensure the user is authenticated
  if (credentialState === appleAuth.State.AUTHORIZED) {
    // user is authenticated

    // can be null in some scenarios
    if (identityToken) {
      // 3). create a Firebase `AppleAuthProvider` credential
      const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);

      // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
      //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
      //     to link the account to an existing user
      const userCredential = await fbAuthFunc.signInWithCredential(appleCredential);

      // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
      // console.warn(`Firebase authenticated via Apple, UID: ${userCredential.user.uid}`);
      return userCredential;
    } else {
      // handle this - retry?
    }
  }
}
