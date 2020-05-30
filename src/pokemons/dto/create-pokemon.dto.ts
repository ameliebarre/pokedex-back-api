export class CreatePokemonDTO {
  _id: string;
  names: {
    french: string;
    english: string;
    japanese: string;
  };
  slug: string;
  family: string;
  description: string;
  generation: number;
  pokedex: [
    {
      name: string;
      key: string;
      number: string;
      versions: [
        {
          games: [];
          key: string;
        }
      ]
    }
  ];
  attacks: [
    {
      attack: Object;
      level: string;
    }
  ];
  evolutions: [
    {
      stade: string;
      pokemon: Object;
      description: string;
    }
  ];
  egg_group: string;
  height: number;
  weight: number;
  talents: [
    {
      name: string;
      description: string;
    }
  ];
  sex: [
    {
      label: string;
      key: string;
      percentage: number;
    }
  ];
  places: [
    {
      game: Object;
      place: string;
    }
  ];
  statistics: {
    hp: {
      name: string;
      value: Number;
    };
    attack: {
      name: string;
      value: Number;
    };
    defense: {
      name: string;
      value: Number;
    };
    sp_attack: {
      name: string;
      value: Number;
    };
    sp_defense: {
      name: string;
      value: Number;
    };
    speed: {
      name: string;
      value: Number;
    };
  };
  color: string;
  size: string;
  catch_rate: number;
  types: [];
  weaknesses: [];
}