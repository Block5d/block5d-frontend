import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageScComponent } from './manage-sc.component';

describe('ManageScComponent', () => {
  let component: ManageScComponent;
  let fixture: ComponentFixture<ManageScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
