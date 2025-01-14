import mongoose from "../db.connection/db.connection.js";
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
