import createHttpError from "http-errors";
import { createUser } from "../Services/auth.service.js";
import { generateToken } from "../Services/token.service.js";

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

    const access_token = await generateToken(
      { userId: newUser._id },
      process.env.TOKEN_EXPIRE,
      process.env.ACCESS_TOKEN_SECRET
    );
    const refresh_token = await generateToken(
      { userId: newUser._id },
      process.env.TOKEN_EXPIRE,
      process.env.REFRESH_TOKEN_SECRET
    );

    res.cookie("refreshToken", refresh_token, {
      httpOnly: true,
      path: "/api/v1/auth/refreshtoken",
      maxAge: 30 * 24 * 60 * 1000, //30 Days
    });

    res.status(200).json({
      message: "Register Sucess.",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        bio: newUser.bio,
        picture: newUser.picture,
        poster: newUser.poster,
        location: newUser.location,
        website: newUser.website,
        date_of_birth: newUser.date_of_birth,
        token: access_token,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
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
