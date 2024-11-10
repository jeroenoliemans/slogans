import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSloganComponent } from './add-slogan.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {SlogansComponent} from "../slogans/slogans.component";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AddSloganComponent', () => {
  let component: AddSloganComponent;
  let fixture: ComponentFixture<AddSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AddSloganComponent],
    providers: [provideRouter([{ path: 'slogans', component: SlogansComponent }]), provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
