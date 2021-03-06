import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { CompanyTableData} from './company-table-data';
import  {AddViewComponent} from './add-view.component';
import { EditViewComponent} from './edit-view/edit-view.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  bsModalRef2:BsModalRef;
  bsModalRef:BsModalRef;
  public addBtnModel:string;
  public editBtnModel: string;
  public deleteBtnModel: string;

  public rows:Array<any>=[];
  public columns:Array<any>=[
    {
      title: 'Name',
      name: 'name',
      filtering: {filterString: '', placeholder: 'Search by name'}
    },
    {
      title: 'ID',
      name: 'ID',
      sort: false,
      filtering: {filterString: '', placeholder: 'Search by ID'}
    },
    {
      title: 'Registration number',
      name: 'Reg_no',
      sort: false,
      filtering: {filterString: '', placeholder: 'Search by registration number'}
    },
    {
      title: 'Type',
      name: 'type',
      sort: false,
      filtering: {filterString: '', placeholder: 'Search by type'}
    }
  ];

  public page:number=1;
  public itemsPerPage:number=10;
  public maxSize:number=5;
  public numPages:number=1;
  public length:number=0;

  public config: any={
    paging: true,
    sorting:{columns:this.columns},
    filtering:{filterString:''},
    className:['table-striped','table-bordered']

  }
  private data:Array<any>=CompanyTableData;

  public constructor(
    private modalService: BsModalService,
    private modalService2:BsModalService) {
    this.length=this.data.length;
   }

  public ngOnInit():void {
    this.onChangeTable(this.config);
  
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any>{
    let start=(page.page-1)*page.itemsPerPage;
    let end=page.itemsPerPage>-1?(start+page.itemsPerPage):data.length;
    return data.slice(start,end);
  }
  public changeSort(data:any,config:any):any{
    if(!config.sorting){
      return data;
    }
    let columns= this.config.sorting.columns ||[];
    let columnName:string=void 0;
    let sort :string =void 0;

    for(let i=0;i<columns.length; i++){
      if (columns[i].sort!==''&&columns[i].sort!==false){
        columnName=columns[i].name;
        sort=columns[i].sort;
      }
    }
    if(!columnName){
      return data;
    }
    return data.sort((previous:any,current:any)=>{
      if (previous[columnName]>current[columnName]){
        return sort ==='desc'?-1:1;

      }else if(previous[columnName]<current[columnName]){
        return sort === 'asc'?-1:1;
      }
      return 0;
    })
  }

  public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });
    if (!config.filtering) {
      return filteredData;
    }
    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }
    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }


  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
  openModalWithComponent(){
    this.bsModalRef= this.modalService.show(AddViewComponent);
  }
  openModalWithEdit(){
    this.bsModalRef2=this.modalService2.show(EditViewComponent)
  }
}