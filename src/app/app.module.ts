import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
import { MainBoxChatComponent } from './components/main-box-chat/main-box-chat.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChatReducer } from './ngrx/reducer/chat.reducer';
import { ChatEffects } from './ngrx/effect/chat.effect';

@NgModule({
  declarations: [AppComponent, NavbarComponent, LeftNavbarComponent, MainBoxChatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    MatIconModule,
    MatButtonModule,
    NoopAnimationsModule,
    StoreModule.forRoot({ chats: ChatReducer }, {}),
    EffectsModule.forRoot([ChatEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
