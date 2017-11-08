import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgTableComponent } from './ng-2-table/ng-2-table.component';
import { NgTableFilteringDirective } from './ng-2-table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './ng-2-table/ng-table-paging.directive';
import { NgTableSortingDirective } from './ng-2-table/ng-table-sorting.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective],
  exports: [NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective]
})
export class Ng2TableModule {
}