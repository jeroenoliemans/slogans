import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComponent } from './theme.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ThemeComponent', () => {
  let component: ThemeComponent;
  let fixture: ComponentFixture<ThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
