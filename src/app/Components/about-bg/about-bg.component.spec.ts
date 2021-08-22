import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBgComponent } from './about-bg.component';

describe('AboutBgComponent', () => {
  let component: AboutBgComponent;
  let fixture: ComponentFixture<AboutBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
