import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../controllers/pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../interfaces/pokemon.interface';
jest.mock('../services/pokemon.service.ts');

describe('Pokemon controller', () => {
  let module: TestingModule;
  let pokemonController: PokemonController;
  let pokemonService: PokemonService;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [PokemonService],
    }).compile();

    pokemonController = module.get<PokemonController>(PokemonController);
    pokemonService = module.get<PokemonService>(PokemonService);
  });

  afterEach(() => {
    jest.resetAllMocks();
 });

  describe('findAll', () => {
    test('should return an array of Pokemons', async () => {
      const expectedResult: any[] = [
        {
          _id: "5bc86f41dbe0832a8f7d3188",
          names: {
            french: "Bulbizarre",
            english: "Bulbasaur",
            japanese: "フシギダネ",
          },
          slug: "bulbizarre",
          family: "Graine",
          description: "Lorem ipsum",
          pokedex: [],
          egg_group: ["Monstrueux"],
          generation: 1,
          talents: [
            {
                name: "Engrais", 
                description: "Booste les capacités Plante en cas de besoin."
            }, 
            {
                name: "Chlorophylle", 
                description: "Augmente la Vitesse du Pokémon s’il y a du soleil."
            }
          ],
          statistics: {
            hp: {
                name: "PV", 
                value: 45
            }, 
            attack: {
                name: "Attaque", 
                value: 49
            }, 
            defense: {
                name: "Défense", 
                value: 49
            }, 
            sp_attack: {
                name: "Attaque spéciale", 
                value: 65
            }, 
            sp_defense: {
                name: "Défense spéciale", 
                value: 65
            }, 
            speed: {
                name: "Vitesse", 
                value: 65
            }
          },
          color: "green",
          catch_rate: 45,
          attacks: [],
          evolutions: [],
          height: 0.7, 
          weight: 6.9,
          size: "small",
          places: [],
          sex: [],
          types: [],
          weaknesses: []
        },
      ];
      jest.spyOn(pokemonService, "findAll").mockResolvedValue(expectedResult);
      expect(await pokemonController.findAll()).toBe(expectedResult);
      expect(await pokemonController.findAll()).toHaveLength(1);
    });
  });
});