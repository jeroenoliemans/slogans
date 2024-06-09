import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesComponent } from './themes.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ThemesComponent', () => {
  let component: ThemesComponent;
  let fixture: ComponentFixture<ThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemesComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
