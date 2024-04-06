import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NobbarComponent } from './nobbar.component';

describe('NobbarComponent', () => {
  let component: NobbarComponent;
  let fixture: ComponentFixture<NobbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NobbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NobbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
