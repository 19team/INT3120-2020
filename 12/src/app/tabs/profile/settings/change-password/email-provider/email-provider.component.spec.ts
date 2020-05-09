import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormBuilder } from '@angular/forms';
import { Facebook } from '@ionic-native/facebook/ngx';
import { IonicModule } from '@ionic/angular';

import { environment } from '../../../../../../environments/environment';
import { ChangePasswordForEmailProviderComponent } from './email-provider.component';

describe('ChangePasswordForEmailProviderComponent', () => {
  let component: ChangePasswordForEmailProviderComponent;
  let fixture: ComponentFixture<ChangePasswordForEmailProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePasswordForEmailProviderComponent],
      imports: [
        IonicModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
        AngularFireStorageModule
      ],
      providers: [FormBuilder, Facebook]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangePasswordForEmailProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
