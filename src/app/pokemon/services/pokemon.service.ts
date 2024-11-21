import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokemonDetails, PokemonResult} from '../../shared/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
  ) { }

  getPokemons(url: string) : Observable<PokemonResult>{
    return this.http.get<PokemonResult>(url);
  }
  getPokemon(url: string) : Observable<PokemonDetails>{
    return this.http.get<PokemonDetails>(url);
  }




}
