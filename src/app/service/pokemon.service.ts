import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IPokemon } from '../interfaces/ipokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Injecting HttpClient as a dependency
  // HttpClient is a class that allows us to perform Http requests (GET POST PUT)
  http = inject(HttpClient);
  
  getPokemon(userInput = 'bulbasaur') {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
  }
}
