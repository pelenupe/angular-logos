import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDeleteComponent } from './logo-delete.component';

describe('LogoDeleteComponent', () => {
  let component: LogoDeleteComponent;
  let fixture: ComponentFixture<LogoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
