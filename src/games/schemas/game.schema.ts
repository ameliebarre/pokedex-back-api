import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  _id: String,
  name: String,
  slug: String,
  year: String,
  pokemons: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' }],
});