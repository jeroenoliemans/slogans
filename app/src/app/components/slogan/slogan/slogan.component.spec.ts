import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganComponent } from './slogan.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('SloganComponent', () => {
  let component: SloganComponent;
  let fixture: ComponentFixture<SloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SloganComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
