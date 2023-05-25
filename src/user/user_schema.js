import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  age: String,
  createdAt: Date,
  updatedAt: Date
});

const User = model('User', userSchema);

export async function findAll() {
  return await User.find();
}

export async function createUser(requestUser) {
  return await User.create(requestUser);
}

export async function updateUser(userId, requestUser) {
  return await User.findOneAndUpdate({ _id: userId }, requestUser);
}

export async function findById(userId) {
  return await User.findById(userId);
}