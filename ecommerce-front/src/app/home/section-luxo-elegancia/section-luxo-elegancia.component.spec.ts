import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLuxoEleganciaComponent } from './section-luxo-elegancia.component';

describe('SectionLuxoEleganciaComponent', () => {
  let component: SectionLuxoEleganciaComponent;
  let fixture: ComponentFixture<SectionLuxoEleganciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLuxoEleganciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionLuxoEleganciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
