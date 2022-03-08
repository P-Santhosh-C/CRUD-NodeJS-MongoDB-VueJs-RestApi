import express from "express";
import mongoose from "mongoose";

import UsersModel from "../models/usersmodel.js";

const router = express.Router();

export const getUsers = async (req, res) => {
  try {
    const usersModel = await UsersModel.find();

    res.status(200).json(usersModel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getuser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UsersModel.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  const newUsersModel = new UsersModel({
    ...user,
    createdAt: new Date().toISOString(),
  });

  try {
    await newUsersModel.save();

    res.status(201).json(newUsersModel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { cell} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { cell, _id: id };

  await UsersModel.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await UsersModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

export default router;
