import { emailRegExp, nameRegExp, passwordRegExp, titleThemeRegExp } from "../constants/Regexp";
import { ErrorCode } from "../constants/errorCode";

const validateEmailRegExp = (val: string) => !emailRegExp.test(val);
export const validateFieldRegExp = (val: string) => nameRegExp.test(val);
export const validateTitleThemeRegExp = (val: string) => titleThemeRegExp.test(val);
export const validatePasswordRegExp = (val: string) => !passwordRegExp.test(val);

export const validateEmail = (val: string, isLogin?: boolean, errorCode?: ErrorCode.emailAlreadyUse) => {
  if (validateEmailRegExp(val)) {
    return "errors.email.not-valid";
  } else if (val.length >= 50) {
    return "errors.email.characters-lng";
  } else if (!isLogin && errorCode === ErrorCode.emailAlreadyUse) {
    return "errors.email.already-exist";
  }
  return "";
};

export const validateSendMailEmail = (val: string) => {
  if (validateEmailRegExp(val)) {
    return "errors.email.not-valid";
  } else if (val.length >= 50) {
    return "errors.email.characters-lng";
  }
  return "";
};

export const validateSendMailMessage = (val: string) => {
  if (val.length < 5) {
    return "errors.mail.message-lng";
  } else if (val.length <= 5 || val.length >= 1000) {
    return "errors.mail.message-lng";
  }
  return "";
};

export const validateField = (val: string, field?: string) => {
  if (val.length < 2) {
    return `errors.${field || "name"}.required`;
  } else if (validateFieldRegExp(val)) {
    return `errors.${field || "name"}.symbols`;
  } else if (val.length <= 2 || val.length >= 50) {
    return `errors.${field || "name"}.characters-lng`;
  }
  return "";
};

export const validateThemeTitle = (val: string) => {
  if (val.length < 2) {
    return "errors.title.required";
  } else if (validateTitleThemeRegExp(val)) {
    return "errors.title.symbols";
  } else if (val.length <= 2 || val.length >= 50) {
    return "errors.title.characters-lng";
  }
  return "";
};

export const validatePassword = (val: string, isLogin?: boolean, email?: string, errorCode?: string) => {
  if (validatePasswordRegExp(val)) {
    return "errors.password.symbols";
  } else if (val.length >= 50) {
    return "errors.password.characters-lng";
  } else if (isLogin && email) {
    if (errorCode === ErrorCode.wrongPassword) {
      return "errors.password.wrong";
    }
  }
  return "";
};
