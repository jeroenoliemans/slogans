import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThemeComponent } from './add-theme.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AddThemeComponent', () => {
  let component: AddThemeComponent;
  let fixture: ComponentFixture<AddThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AddThemeComponent],
    providers: [provideRouter([{ path: 'themes', component: AddThemeComponent }]), provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
