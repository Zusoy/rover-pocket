import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdpperduPage } from './mdpperdu.page';

describe('MdpperduPage', () => {
  let component: MdpperduPage;
  let fixture: ComponentFixture<MdpperduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdpperduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdpperduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
