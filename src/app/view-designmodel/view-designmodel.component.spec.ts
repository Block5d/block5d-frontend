import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDesignmodelComponent } from './view-designmodel.component';

describe('ViewDesignmodelComponent', () => {
  let component: ViewDesignmodelComponent;
  let fixture: ComponentFixture<ViewDesignmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDesignmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDesignmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
