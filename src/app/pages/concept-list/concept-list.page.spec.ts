import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptListPage } from './concept-list.page';

describe('ConceptListPage', () => {
  let component: ConceptListPage;
  let fixture: ComponentFixture<ConceptListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
