import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pseudo3dcarouselComponent } from './pseudo3dcarousel.component';

describe('Pseudo3dcarouselComponent', () => {
  let component: Pseudo3dcarouselComponent;
  let fixture: ComponentFixture<Pseudo3dcarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pseudo3dcarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pseudo3dcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
