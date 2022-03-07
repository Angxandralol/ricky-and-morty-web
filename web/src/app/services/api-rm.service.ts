import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRMService {

  private base_url = 'https://rickandmortyapi.com/api/character';

  constructor(private client:HttpClient) { }

  public getRandomCharacter(id: number) {
    return this.client.get(`${this.base_url}/${id}`);
  }
}
