import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AProposPage } from './a-propos.page';

describe('AProposPage', () => {
  let component: AProposPage;
  let fixture: ComponentFixture<AProposPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AProposPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AProposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
