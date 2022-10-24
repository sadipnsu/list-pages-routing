import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TableListService } from '../table-list.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  tableList : any =[];
  pageName : string ="";
  Id: string | null = null;
  numId : number = -1;

  constructor(private router: Router, private _tableService : TableListService, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.tableList = this._tableService.getTableList();
    this.Id = this.route.snapshot.paramMap.get('id');
    this.numId = Number(this.Id);
    for (var i in this.tableList){
      if (this.tableList[i].sl == (this.numId) ){
        this.pageName = this.tableList[i].name;
      }
    };

  }
pageBack(){
    this.router.navigate(['']);
  }
}
