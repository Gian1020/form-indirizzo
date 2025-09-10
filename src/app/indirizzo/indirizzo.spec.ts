import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indirizzo } from './indirizzo';

describe('Indirizzo', () => {
  let component: Indirizzo;
  let fixture: ComponentFixture<Indirizzo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indirizzo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indirizzo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
