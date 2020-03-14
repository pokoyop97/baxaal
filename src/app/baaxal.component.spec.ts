import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaaxalComponent } from './baaxal.component';

describe('BaaxalComponent', () => {
  let component: BaaxalComponent;
  let fixture: ComponentFixture<BaaxalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaaxalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaaxalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
