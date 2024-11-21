
export interface PokemonResult{
  next?: string;
  previous?: string;
  count : number;
  results: PokemonDTO[];
}
export interface PokemonDTO {
  name : string;
  url : string;
  simplePokemonImage: string;
}

export interface PokemonType {
  slot: number;
  type: {
    name : string;
    url : string;
  }
}

export interface PokemonDetails {
  id : number;
  name: string;
  height: number;
  types: [PokemonType]
  weight: number;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default : string;
      }
      showdown:{
        front_default : string;
      }
    }
  }
}

