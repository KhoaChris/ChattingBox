import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from '@angular/fire/auth';
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

  async loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    let result = await signInWithPopup(this.auth, provider);
    console.log(result);
  }

  logoutWithGoogle(){
    this.auth.signOut();
  }
}
