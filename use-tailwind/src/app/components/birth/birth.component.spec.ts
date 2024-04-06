import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarModule } from 'primeng/calendar';
import { BirthComponent } from './birth.component';

describe('BirthComponent', () => {
  let component: BirthComponent;
  let fixture: ComponentFixture<BirthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthComponent,CalendarModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
