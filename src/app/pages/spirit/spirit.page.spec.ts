import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpiritPage } from './spirit.page';

describe('SpiritPage', () => {
  let component: SpiritPage;
  let fixture: ComponentFixture<SpiritPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
