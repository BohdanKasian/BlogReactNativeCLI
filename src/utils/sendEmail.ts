import RNSmtpMailer from "react-native-smtp-mailer";
import { getHTMLBodyForgot } from "./emails/emailBodyForgot";
import { getHTMLBodyContact } from "./emails/emailBodyContact";
import { EMAIL_ADDRESS, EMAIL_PASS } from "../constants/emailCredential";
import { fbAuthFunc } from "../../App";

type sendEmailType = (
  recipients: string,
  subject: string,
  userName?: string,
  restoreCode?: string,
  contact?: { text: string; sender: string; date: string; title: string }
) => Promise<any>;

export const sendEmail: sendEmailType = (recipients, subject, userName, restoreCode, contact) => {
  let htmlBody = "";
  if (restoreCode) {
    htmlBody = getHTMLBodyForgot(restoreCode, userName);
    return fbAuthFunc.sendPasswordResetEmail(
      recipients
      // , {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      // url: "https://mentalreminders-b69d6.firebaseapp.com/__/auth/action",
      // This must be true.
      // handleCodeInApp: true,
      // iOS: {
      //   bundleId: "mentalreminders",
      // },
      // dynamicLinkDomain: "https://mentalreminders-b69d6.web.app"
      // }
    );
  } else if (contact) {
    htmlBody = getHTMLBodyContact(contact);
  }

  return RNSmtpMailer.sendMail({
    mailhost: "smtp.gmail.com",
    port: "465",
    ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
    username: EMAIL_ADDRESS,
    password: EMAIL_PASS,
    recipients: recipients,
    subject: subject,
    htmlBody: htmlBody,
  });
};
