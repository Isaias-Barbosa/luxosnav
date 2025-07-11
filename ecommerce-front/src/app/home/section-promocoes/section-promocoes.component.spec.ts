import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPromocoesComponent } from './section-promocoes.component';

describe('SectionPromocoesComponent', () => {
  let component: SectionPromocoesComponent;
  let fixture: ComponentFixture<SectionPromocoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPromocoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPromocoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
