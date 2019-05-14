import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageListItemComponent } from './manage-list-item.component';

describe('ManageListItemComponent', () => {
  let component: ManageListItemComponent;
  let fixture: ComponentFixture<ManageListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
