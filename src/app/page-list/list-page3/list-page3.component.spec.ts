import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPage3Component } from './list-page3.component';

describe('ListPage3Component', () => {
  let component: ListPage3Component;
  let fixture: ComponentFixture<ListPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
