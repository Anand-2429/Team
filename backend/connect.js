import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const User = mongoose.model("User", UserSchema);

export default User;
