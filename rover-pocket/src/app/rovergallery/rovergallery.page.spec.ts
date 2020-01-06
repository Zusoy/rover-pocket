import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RovergalleryPage } from './rovergallery.page';

describe('RovergalleryPage', () => {
  let component: RovergalleryPage;
  let fixture: ComponentFixture<RovergalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RovergalleryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RovergalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
