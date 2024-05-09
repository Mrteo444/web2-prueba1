import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAutosComponent } from './info-autos.component';

describe('InfoAutosComponent', () => {
  let component: InfoAutosComponent;
  let fixture: ComponentFixture<InfoAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
