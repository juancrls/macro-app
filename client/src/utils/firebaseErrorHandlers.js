const errorMessages = {
  "auth/email-already-in-use": "This email is already in use.",
  "auth/user-not-found": "Incorrect email or password",
  "auth/wrong-password": "Incorrect password.",
  "auth/invalid-email": "Invalid email address.",
  "auth/weak-password": "The password is too weak.",
  "auth/too-many-requests": "Too many requests. Please try again later.",
  "auth/network-request-failed": "Network error. Please check your internet connection and try again.",
  "storage/object-not-found": "The requested file does not exist.",
  "storage/unauthorized": "You are not authorized to access this file.",
  "storage/canceled": "The upload was cancelled.",
  "storage/unknown": "An unknown error occurred. Please try again later.",
};

export function getErrorMessage(errorCode) {
  const errorMessage = errorMessages[errorCode] || "An unknown error occurred. Please try again later.";
  return errorMessage;
}