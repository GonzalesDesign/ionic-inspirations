import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsPage } from './socials.page';

describe('SocialsPage', () => {
  let component: SocialsPage;
  let fixture: ComponentFixture<SocialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
