import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupfailurePage } from './signupfailure.page';

describe('SignupfailurePage', () => {
  let component: SignupfailurePage;
  let fixture: ComponentFixture<SignupfailurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupfailurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupfailurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
