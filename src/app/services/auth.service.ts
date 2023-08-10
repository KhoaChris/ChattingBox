import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new Subject();

  constructor(private auth: Auth, private router: Router) {
    onAuthStateChanged(this.auth, (user) => {
      this.user$.next(user);
    })
   }

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider);
  }

  logoutWithGoogle(){
    this.auth.signOut();
    
  }
}
