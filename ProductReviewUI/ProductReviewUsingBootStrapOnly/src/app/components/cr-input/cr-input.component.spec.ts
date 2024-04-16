import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrInputComponent } from './cr-input.component';

describe('CrInputComponent', () => {
  let component: CrInputComponent;
  let fixture: ComponentFixture<CrInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
