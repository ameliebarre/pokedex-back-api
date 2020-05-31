import { Schema } from 'mongoose';
import { TypeSchema } from 'src/types/schemas/type.schema';

export const PokemonSchema = new Schema({
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
          games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
          key: String,
        }
      ]
    }
  ],
  attacks: [
    {
      attack: { type: Schema.Types.ObjectId, ref: 'Attack' },
      level: String,
    }
  ],
  evolutions: [
    {
      stade: String,
      pokemon: { type: Schema.Types.ObjectId, ref: 'Pokemon' },
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
      game: { type: Schema.Types.ObjectId, ref: 'Game' },
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
  types: [{ type: Schema.Types.ObjectId, ref: TypeSchema }],
  weaknesses: [{ type: Schema.Types.ObjectId, ref: TypeSchema }],
})