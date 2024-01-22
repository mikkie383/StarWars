import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../models/people.model';

const BASE_URL = 'https://swapi.dev/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  selectedPerson: People | undefined;
  category: string = 'people';
  constructor(private httpClient: HttpClient) { }

  getAllCategories(){
    return this.httpClient.get(BASE_URL);
  }
  setCategory(selectedCategory: string){
    this.category = selectedCategory.toLocaleLowerCase();
    console.log(this.category);
  }
  getOneCategory(pageNum?: number){
    return this.httpClient.get(`${BASE_URL}/${this.category}${pageNum?"/?page="+pageNum:""}`)
  }
  getURLData(url: string){
    return this.httpClient.get(url);
  }
}
