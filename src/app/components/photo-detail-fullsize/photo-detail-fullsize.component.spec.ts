import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDetailFullsizeComponent } from './photo-detail-fullsize.component';

describe('PhotoDetailFullsizeComponent', () => {
  let component: PhotoDetailFullsizeComponent;
  let fixture: ComponentFixture<PhotoDetailFullsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDetailFullsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDetailFullsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
