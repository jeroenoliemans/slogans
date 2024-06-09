import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSloganComponent } from './add-slogan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {SlogansComponent} from "../slogans/slogans.component";

describe('AddSloganComponent', () => {
  let component: AddSloganComponent;
  let fixture: ComponentFixture<AddSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSloganComponent, HttpClientTestingModule],
      providers: [provideRouter([{path: 'slogans', component: SlogansComponent}])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
