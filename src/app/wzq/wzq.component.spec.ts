import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WzqComponent } from './wzq.component';

describe('WzqComponent', () => {
  let component: WzqComponent;
  let fixture: ComponentFixture<WzqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WzqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
