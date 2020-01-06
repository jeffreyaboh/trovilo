import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginerrorPage } from './loginerror.page';

describe('LoginerrorPage', () => {
  let component: LoginerrorPage;
  let fixture: ComponentFixture<LoginerrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginerrorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginerrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
