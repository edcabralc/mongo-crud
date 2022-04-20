import { connect } from "mongoose";
import dotenv from "dotenv";

export const mongoConnect = async () => {
  try {
    console.log("Preparando conexão...");
    await connect(process.env.MONGO_URL as string);
    console.log("Conexão realizada com sucesso");
  } catch (error) {
    console.log(`Erro ao realizar conexão ${error}`);
  }
};

dotenv.config();
