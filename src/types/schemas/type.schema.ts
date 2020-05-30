import * as mongoose from 'mongoose';

export const TypeSchema = new mongoose.Schema({
  _id: String,
  name: String,
  slug: String,
  color: String,
})