import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnwListComponent } from './wnw-list.component';

describe('WnwListComponent', () => {
  let component: WnwListComponent;
  let fixture: ComponentFixture<WnwListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnwListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
