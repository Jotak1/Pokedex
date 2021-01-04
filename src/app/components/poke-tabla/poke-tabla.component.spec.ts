import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTablaComponent } from './poke-tabla.component';

describe('PokeTablaComponent', () => {
  let component: PokeTablaComponent;
  let fixture: ComponentFixture<PokeTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
