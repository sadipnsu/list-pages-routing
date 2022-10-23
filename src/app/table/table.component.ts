import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableListService } from '../table-list.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public tableList:any=[];

  constructor(private _tableService : TableListService, private router: Router) { }

  ngOnInit(): void {
    this.tableList = this._tableService.getTableList();
  }


}
