import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPage2Component } from './list-page2.component';

describe('ListPage2Component', () => {
  let component: ListPage2Component;
  let fixture: ComponentFixture<ListPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
