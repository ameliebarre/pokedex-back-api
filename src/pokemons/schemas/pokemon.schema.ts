import * as mongoose from 'mongoose';

export const PokemonSchema = new mongoose.Schema({
  _id: String,
  names: {
    french: String,
    english: String,
    japanese: String,
  },
  slug: String,
  family: String,
  description: String,
  generation: String,
  pokedex: [
    {
      name: String,
      key: String,
      number: String,
      versions: [
        {
          games: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
          key: String,
        }
      ]
    }
  ],
  attacks: [
    {
      attack: { type: mongoose.Schema.Types.ObjectId, ref: 'Attack' },
      level: String,
    }
  ],
  evolutions: [
    {
      stade: String,
      pokemon: { type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon' },
      description: String,
    }
  ],
  egg_group: String,
  height: Number,
  weight: Number,
  talents: [
    {
      name: String,
      description: String,
    }
  ],
  sex: [
    {
      label: String,
      key: String,
      percentage: Number,
    }
  ],
  places: [
    {
      game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' },
      place: String,
    }
  ],
  statistics: {
    hp: {
      name: String,
      value: Number,
    },
    attack: {
      name: String,
      value: Number,
    },
    defense: {
      name: String,
      value: Number,
    },
    sp_attack: {
      name: String,
      value: Number,
    },
    sp_defense: {
      name: String,
      value: Number,
    },
    speed: {
      name: String,
      value: Number,
    },
  },
  color: String,
  size: String,
  catch_rate: Number,
  types: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
  weaknesses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
})