import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSloganComponent } from './add-slogan.component';

describe('AddSloganComponent', () => {
  let component: AddSloganComponent;
  let fixture: ComponentFixture<AddSloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSloganComponent]
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
