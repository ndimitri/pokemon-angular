import { Component } from '@angular/core';
import {PokemonDetails, PokemonDTO, PokemonResult} from '../../shared/models/pokemon';
import {PokemonService} from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss'
})
export class PokemonComponent {

  pokemonResult! : PokemonResult;
  pokemonToDisplay?: PokemonDetails;

  constructor(private _pokemonService: PokemonService) {
    this.getPokemons('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
  }
  previous(url: string) :void{
    this.getPokemons(url);
  }

  next(url: string) : void {
    this.getPokemons(url);
  }


  getPokemons(url: string): void {
    this._pokemonService.getPokemons(url).subscribe({
      next: (res: PokemonResult) =>{
        this.pokemonResult = res;
        this.pokemonResult.results.forEach((pokemonDTO: PokemonDTO) => {
          this.setSimplePokemonImage(pokemonDTO.url, pokemonDTO);
        })
      } ,
      error: (error: Error) => {
        console.log(error);
      }
    })
  }

  getPokemon(url: string): void {
    this._pokemonService.getPokemon(url).subscribe({
      next: (res: PokemonDetails) =>{
        this.pokemonToDisplay = res;
      },
      error: (error: Error) => {
        console.log(error);
      }
    })
  }


  setSimplePokemonImage(url: string, pokemon : PokemonDTO): void{
    this._pokemonService.getPokemon(url).subscribe({
      next: (pokemonDetails: PokemonDetails) =>{
         pokemon.simplePokemonImage = pokemonDetails.sprites.front_default;
      } ,
      error: (error: Error) => {
        console.log(error);
        return null;
      }

    })
  }

}
