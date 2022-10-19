import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { TableComponent } from './table/table.component';
import { ListPage1Component } from './page-list/list-page1/list-page1.component';
import { ListPage2Component } from './page-list/list-page2/list-page2.component';
import { ListPage3Component } from './page-list/list-page3/list-page3.component';

const routes: Routes = [
  {path:'', component: TableComponent},

  {path: 'page-list', component: PageListComponent,
    
    children:[{path:'list-page1', component:ListPage1Component},
              {path:'list-page2', component:ListPage2Component},
              {path:'list-page3', component:ListPage3Component},]  
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableComponent, PageListComponent,ListPage1Component, ListPage2Component,ListPage3Component]

