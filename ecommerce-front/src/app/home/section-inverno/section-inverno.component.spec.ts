import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInvernoComponent } from './section-inverno.component';

describe('SectionInvernoComponent', () => {
  let component: SectionInvernoComponent;
  let fixture: ComponentFixture<SectionInvernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionInvernoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionInvernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
