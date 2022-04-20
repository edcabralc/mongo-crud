import { Request, Response } from "express";
import User from "../models/User";

export const showUsers = async (req: Request, res: Response) => {
  const users = await User.find({});
  // console.log(users);
  res.render("pages/page", {
    users,
  });
};

export const removeUsers = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await User.findOne({ id });

  id ? user?.remove() : console.log("Usuário não econtrado");

  res.redirect("/");
};

export const updateUsers = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.find({ id });
  console.log(user);
  res.redirect("/");
};
