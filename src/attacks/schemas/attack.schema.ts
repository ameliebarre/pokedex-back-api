import * as mongoose from 'mongoose';

export const AttackSchema = new mongoose.Schema({
  _id: String,
  games: [
    {
      game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
      description: String,
      key: String,
    }
  ],
  power: Number,
  precision: Number,
  priority: Number,
  hp: Number,
  ct_cs: String,
})