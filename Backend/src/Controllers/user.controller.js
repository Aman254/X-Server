import createHttpError from "http-errors";
import { UserModel } from "../Models/index.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await UserModel.find();

    res.status(200).json({
      status: "sucess",
      results: allUsers.length,
      users: {
        allUsers,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      throw createHttpError.BadRequest("Please provide a valid Id.");
    }

    res.status(200).json({
      status: "sucess",
      data: {
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;

    const userData = req.body(bio, category);

    if (!userData) {
      throw createHttpError("Bhai Bhai");
    }

    const updatedUser = await UserModel.findByIdAndUpdate(id, userData, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "sucess",
      message: "sucessfully modified",
      data: {
        updatedUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
