import createHttpError from "http-errors";
import { createUser } from "../../Services/auth.service.js";

export const register = async (req, res, next) => {
  try {
    //Taking the Input in the Body for the Registration.
    const {
      name,
      email,
      password,
      picture,
      poster,
      bio,
      location,
      website,
      date_of_birth,
    } = req.body;

    //Creating a User with the provided data using the createUser service.
    const newUser = await createUser({
      name,
      email,
      password,
      picture,
      poster,
      bio,
      location,
      website,
      date_of_birth,
    });
    //Sending the response
    res.status(200).json({
      message: "Register Sucessfull",

      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        picture: newUser.picture,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    throw createHttpError("Error hain Bhai");
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const refreshToken = async (req, res) => {
  try {
  } catch (err) {
    next(err);
  }
};
