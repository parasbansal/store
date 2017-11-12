import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  BaseURL: any = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.BaseURL + '/');
  }

  add(newItem) {
    return this.http.post(this.BaseURL + '/', newItem);
  }

  edit(id, newItem) {
    return this.http.put(this.BaseURL + '/' + id, newItem);
  }

  delete(id) {
    return this.http.delete(this.BaseURL + '/' + id);
  }

}
