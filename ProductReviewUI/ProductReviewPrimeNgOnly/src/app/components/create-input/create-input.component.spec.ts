import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInputComponent } from './create-input.component';

describe('CreateInputComponent', () => {
  let component: CreateInputComponent;
  let fixture: ComponentFixture<CreateInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
