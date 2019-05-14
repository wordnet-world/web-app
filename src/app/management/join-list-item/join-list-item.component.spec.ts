import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinListItemComponent } from './join-list-item.component';

describe('JoinListItemComponent', () => {
  let component: JoinListItemComponent;
  let fixture: ComponentFixture<JoinListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
