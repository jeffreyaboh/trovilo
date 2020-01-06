import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupsuccessPage } from './signupsuccess.page';

describe('SignupsuccessPage', () => {
  let component: SignupsuccessPage;
  let fixture: ComponentFixture<SignupsuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupsuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
