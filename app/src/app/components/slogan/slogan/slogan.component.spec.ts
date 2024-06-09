import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganComponent } from './slogan.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SloganComponent', () => {
  let component: SloganComponent;
  let fixture: ComponentFixture<SloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SloganComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
