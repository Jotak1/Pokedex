
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2';
  public ids:number;
  constructor(private http: HttpClient) { }

  getPokelimit(limit){
    return this.http.get<any>(`${this.baseUrl}/pokemon-species/?limit=${limit}`);
  }

  //Obtiene pokemon
  getPokemons(index){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
}
