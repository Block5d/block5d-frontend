export const CompanyTableData:Array<any> = [
    {
      'name': 'aa',
      'ID': '12',
      'Reg_no': '123456',
      'type': `Constructor`,
      'action': `<button type="button" class="btn btn-primary"
      [(ngModel)]="editBtnModel" btnCheckbox
      btnCheckboxTrue="1" btnCheckboxFalse="0">
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </button>
      <button type="button" class="btn btn-danger"
      [(ngModel)]="deleteBtnModel" btnCheckbox
      btnCheckboxTrue="1" btnCheckboxFalse="0">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button>`
    },
    {
        'name': 'bb',
        'ID': '13',
        'Reg_no': '654321',
        'type': `Insurance`,
        'action': `<button type="button" class="btn btn-primary"
        [(ngModel)]="editBtnModel" btnCheckbox
        btnCheckboxTrue="1" btnCheckboxFalse="0">
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button type="button" class="btn btn-danger"
        [(ngModel)]="deleteBtnModel" btnCheckbox
        btnCheckboxTrue="1" btnCheckboxFalse="0">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>`
      }
  ];