
export interface PokemonResult{
  next?: string;
  previous?: string;
  count : number;
  results: PokemonDTO[];
}
export interface PokemonDTO {
  name : string;
  url : string;
  basicSprite: string;
}

export interface PokemonDetails {
  id : number;
  name: string;
  height: string;
  weight: string;
  sprites: {
    front_default: string;
    other: {
      dreamworld: {
        front_default : string;
      }
    }
  }
}

