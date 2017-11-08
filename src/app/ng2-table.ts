import { NgTableComponent } from './ng-2-table/ng-2-table.component';

import { NgTableFilteringDirective } from './ng-2-table/ng-table-filtering.directive';
import { NgTablePagingDirective } from './ng-2-table/ng-table-paging.directive';
import { NgTableSortingDirective } from './ng-2-table/ng-table-sorting.directive';

export * from './ng-2-table/ng-2-table.component';

export * from './ng-2-table/ng-table-filtering.directive';
export * from './ng-2-table/ng-table-paging.directive';
export * from './ng-2-table/ng-table-sorting.directive';

export * from './ng-table-directives';

export default {
  directives: [
    NgTableComponent,
    NgTableFilteringDirective,
    NgTableSortingDirective,
    NgTablePagingDirective
  ]
};

export { Ng2TableModule } from './ng-table-module';