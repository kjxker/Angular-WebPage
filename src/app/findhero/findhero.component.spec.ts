import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindheroComponent } from './findhero.component';

describe('FindheroComponent', () => {
  let component: FindheroComponent;
  let fixture: ComponentFixture<FindheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
