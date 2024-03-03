import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommuneComponent } from './listecommune.component';

describe('ListecommuneComponent', () => {
  let component: ListecommuneComponent;
  let fixture: ComponentFixture<ListecommuneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListecommuneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListecommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
