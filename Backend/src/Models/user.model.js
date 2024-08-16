import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a Name."],
      trim: true,
      minLength: [1, "Users name should be greater than 1 character."],
      maxLength: [50, "Users name must not be greater than 50 characters."],
    },
    email: {
      type: String,
      required: [true, "A User must have an Email."],
      unique: [true, "Email-id already exists."],
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid Email."],
    },
    picture: {
      type: String,
      default: "https://avatar.iran.liara.run/public",
      trim: true,
    },
    poster: {
      type: String,
      default: "",
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password."],
      minLength: [6, "A password should atleast have 6 characters."],
      maxLength: [
        128,
        "Password characters must be between 6 to 128 characters.",
      ],
    },
    bio: {
      type: String,
      trim: true,
      minLength: [1, "Users Bio should be greater than 1 character."],
      maxLength: [160, "Users bio must not be greater than 160 characters."],
    },
    location: {
      type: String,
      trim: true,
      minLength: [1, "Users location must be greater than 1 character."],
      maxLength: [30, "Users location must not be greater than 30 characters."],
    },
    category: {
      type: String,
      enum: {
        values: [
          "Entertainment & Recreation",
          "Event Venue",
          "Dance & Night Club",
          "Automotive",
          "Aviation",
          "Marine",
          "Beauty, Cosmetic & Personal Care",
          "Commercial & Industrial",
          "Education",
          "Financial Services",
          "Restaurant",
          "Hotel & Lodging",
          "Home & Garden",
          "Professional Services",
          "Advertising & Marketing Agency",
          "Lawyer & Law Firm",
          "Media & News Company",
          "Medical & Health",
          "Non-Governmental & Nonprofit Organization",
          "Real Estate",
          "Science & Technology",
          "Entrepneur",
        ],
      },
    },
    website: {
      type: String,
      trim: true,
      minLength: [1, "Users website must be greater than 1 character."],
      maxLength: [
        100,
        "Users website must not be greater than 100 characters.",
      ],
      validate: {
        validator: function (v) {
          return validator.isURL(v);
        },
        message: (props) => `${props.value} is not a valid URL`,
      },
    },

    date_of_birth: {
      type: Date,
      trim: true,
    },
  },
  {
    collection: "users",
    timestamps: true,
    updatedAt: new Date(0),
    strict: true, // Enforce strict schema validation
  }
);

// Hashing the Password.
userSchema.pre("save", async function (next) {
  try {
    if (this.isNew) {
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

const UserModel =
  mongoose.models.UserModel || mongoose.model("UserModel", userSchema);

export default UserModel;
