import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPage1Component } from './list-page1.component';

describe('ListPage1Component', () => {
  let component: ListPage1Component;
  let fixture: ComponentFixture<ListPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
