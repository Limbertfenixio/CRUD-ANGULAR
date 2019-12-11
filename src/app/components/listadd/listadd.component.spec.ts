import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaddComponent } from './listadd.component';

describe('ListaddComponent', () => {
  let component: ListaddComponent;
  let fixture: ComponentFixture<ListaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
