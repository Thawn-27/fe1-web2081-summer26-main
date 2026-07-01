import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hone } from './hone';

describe('Hone', () => {
  let component: Hone;
  let fixture: ComponentFixture<Hone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
