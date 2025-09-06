import { Error } from "mongoose";
import validator from "validator";

const validateSignupData = (req) => {
  const { firstName, lastName, emailID, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not present");
  } else if (!validator.isEmail(emailID)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not Strong");
  }
};

const validateProfileEditData = (req) => {
  const updatedFields = ["firstName", "lastName", "password"];
  const isEditValid = Object.keys(req.body).every((field) =>
    updatedFields.includes(field)
  );
  return isEditValid;
};

export { validateSignupData, validateProfileEditData };
