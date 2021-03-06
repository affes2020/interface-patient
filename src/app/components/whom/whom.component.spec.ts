import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhomComponent } from './whom.component';

describe('WhomComponent', () => {
  let component: WhomComponent;
  let fixture: ComponentFixture<WhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
