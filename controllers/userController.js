import User from "../models/User.js";

// @desc Get all users
export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// @desc Get user by ID
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

// @desc Create user
export const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email required" });
    }
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// @desc Update user
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

// @desc Delete user
export const deleteUser = async (req, res, next) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User removed" });
  } catch (err) {
    next(err);
  }
};