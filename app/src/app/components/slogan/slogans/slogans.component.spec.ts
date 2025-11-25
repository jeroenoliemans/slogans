import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlogansComponent } from './slogans.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Store } from '../../../store/Store';
import { SloganService } from '../../../service/slogan/slogan.service';
import { ThemeService } from '../../../service/theme/theme.service';
import { runInInjectionContext } from '@angular/core';

describe('SlogansComponent', () => {
  let component: SlogansComponent;
  let fixture: ComponentFixture<SlogansComponent>;
  let sloganService: jasmine.SpyObj<SloganService>;
  let themeService: jasmine.SpyObj<ThemeService>;
  let store: Store;

  beforeEach(async () => {
    sloganService = jasmine.createSpyObj('SloganService', ['fetchSlogans']);
    themeService = jasmine.createSpyObj('ThemeService', ['fetchThemes']);

    await TestBed.configureTestingModule({
      imports: [SlogansComponent],
      providers: [
        Store,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
        { provide: SloganService, useValue: sloganService },
        { provide: ThemeService, useValue: themeService }
      ]
    }).compileComponents();

    // Initialize store in injection context
    runInInjectionContext(TestBed, () => {
      store = TestBed.inject(Store);
    });

    fixture = TestBed.createComponent(SlogansComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch slogans and themes on init', () => {
    fixture.detectChanges(); // triggers ngOnInit
    
    expect(sloganService.fetchSlogans).toHaveBeenCalled();
    expect(themeService.fetchThemes).toHaveBeenCalled();
  });

  it('should have access to the store', () => {
    expect(component.store).toBeTruthy();
    expect(component.store).toBe(store);
  });
});