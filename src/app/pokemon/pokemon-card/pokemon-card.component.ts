import {Component, Input} from '@angular/core';
import {PokemonDetails} from '../../shared/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss'
})
export class PokemonCardComponent {
  @Input({required:false,})
  pokemonToDisplay?: PokemonDetails;

}
