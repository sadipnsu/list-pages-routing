import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  constructor() { }

  getTableList(){
    return [
      {"sl": 1, "name": "Test1"},
      {"sl": 2, "name": "Test2"},
      {"sl": 3, "name": "Test3"},
      {"sl": 4, "name": "Test4"},
      {"sl": 5, "name": "Test5"},
      {"sl": 6, "name": "Test6"},
      {"sl": 7, "name": "Test7"},
    ]
  }
}