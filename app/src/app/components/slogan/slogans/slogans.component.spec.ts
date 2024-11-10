import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogansComponent } from './slogans.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SlogansComponent', () => {
  let component: SlogansComponent;
  let fixture: ComponentFixture<SlogansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SlogansComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(SlogansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
