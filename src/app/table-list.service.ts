import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor() { }

  getTableList(){
    return [
      {"sl": 1, "name": "test1"},
      {"sl": 2, "name": "test2"},
      {"sl": 3, "name": "test3"},
      {"sl": 4, "name": "test4"},
      {"sl": 5, "name": "test5"},
    ]
  }
}