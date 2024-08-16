import createHttpError from "http-errors";
import validator from "validator";
import { UserModel } from "../src/Models/index.js";

export const createUser = async (userData) => {
  const { name, email, password, picture, bio, website } = userData;

  /**Check all fields.*/
  if (!name || !email || !password) {
    throw createHttpError.BadRequest("Please fill all fields.");
  }

  //Check Name length
  if (
    !validator.isLength(name, {
      min: 1,
      max: 50,
    })
  ) {
    throw createHttpError.BadRequest(
      "Please make sure the name is between 1 to 50 characters."
    );
  }

  /**Validate Email */
  if (!validator.isEmail(email)) {
    throw createHttpError.BadRequest("Please provide a valid Email.");
  }

  /**
   * Checking the Databse if the User Already Exists.
   */
  const checkDb = await UserModel.findOne({ email });
  if (checkDb) {
    throw createHttpError.Conflict("Email address already exists.");
  }

  //Hash the Password in the User Model.

  const user = await new UserModel({
    name: name,
    email: email,
    password: password,
    picture: picture || "https://avatar.iran.liara.run/public",
  }).save();

  return user;
};
