import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAutosComponent } from './tabla-autos.component';

describe('TablaAutosComponent', () => {
  let component: TablaAutosComponent;
  let fixture: ComponentFixture<TablaAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAutosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
