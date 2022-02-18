import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentUpsertComponent } from './comment-upsert.component';

describe('CommentUpsertComponent', () => {
  let component: CommentUpsertComponent;
  let fixture: ComponentFixture<CommentUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
