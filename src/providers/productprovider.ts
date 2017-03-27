import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Product provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductProvider {

  constructor(public http: Http) {
    console.log('Hello Product Provider');
  }
  searchProduct(productCode) {
    return this.http.get('http://localhost:8080/api/'+ encodeURI(productCode))
        .map(res => res.json());
  }
}
