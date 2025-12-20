import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomedicaComponent } from './biomedica.component';

describe('BiomedicaComponent', () => {
  let component: BiomedicaComponent;
  let fixture: ComponentFixture<BiomedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomedicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiomedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
