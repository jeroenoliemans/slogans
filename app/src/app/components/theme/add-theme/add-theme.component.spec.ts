import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThemeComponent } from './add-theme.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";

describe('AddThemeComponent', () => {
  let component: AddThemeComponent;
  let fixture: ComponentFixture<AddThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddThemeComponent, HttpClientTestingModule],
      providers: [provideRouter([{path: 'themes', component: AddThemeComponent}])]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AddThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
