import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChegandoAgoraComponent } from './section-chegando-agora.component';

describe('SectionChegandoAgoraComponent', () => {
  let component: SectionChegandoAgoraComponent;
  let fixture: ComponentFixture<SectionChegandoAgoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionChegandoAgoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionChegandoAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
