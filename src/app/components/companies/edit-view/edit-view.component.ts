import { Component, OnInit} from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Company} from '../company';


@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent implements OnInit {
  submitted=false;
  model=new Company('','','','')
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onSubmit(){
    this.submitted=true;
    console.log(JSON.stringify(this.model));
  }
  onchange(evt){

  }


}
