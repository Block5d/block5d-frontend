export const TableData:Array<any> = [
    {
      'name': 'Victoria Cantrell',
      'client': 'Civil Engineer',
      'development': 'Singapore',
      'ProjectManager': `<strong>99999988</strong>`,
      'startDate': '2015/08/19',
      'siteOffice': 'Site Bay',
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
        'name': 'Kenneth Phang',
        'client': 'Site Engineer',
        'development': 'Singapore',
        'ProjectManager': `<strong>99999988</strong>`,
        'startDate': '2015/08/19',
        'siteOffice': 'Site Bay',
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