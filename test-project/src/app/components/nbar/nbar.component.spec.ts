import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbarComponent } from './nbar.component';

describe('NbarComponent', () => {
  let component: NbarComponent;
  let fixture: ComponentFixture<NbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
