import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMaisVendidosComponent } from './section-mais-vendidos.component';

describe('SectionMaisVendidosComponent', () => {
  let component: SectionMaisVendidosComponent;
  let fixture: ComponentFixture<SectionMaisVendidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMaisVendidosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMaisVendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
