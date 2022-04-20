import { Model, model, Schema, connection } from "mongoose";

type Usertype = {
  name: { firstname: string; lastname: string };
  age: number;
  email: string;
  interests: [string];
};

const schema = new Schema<Usertype>({
  name: {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
  },
  age: Number,
  email: String,
  interests: [String],
});

const modelName = "User";

const userModel =
  connection && connection.models[modelName]
    ? (connection.models[modelName] as Model<Usertype>)
    : model<Usertype>(modelName, schema);

export default userModel;
