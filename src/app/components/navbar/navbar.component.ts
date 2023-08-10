import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: any;
  fromUID: any;
  
  constructor(private chatservice: ChatService, public authService: AuthService){
  }
  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      this.user = user;
      this.fromUID = user.displayName;
    });
  }

  logIn() {
    this.authService.loginWithGoogle();
    console.log();
  }

  logOut() {
    this.authService.logoutWithGoogle();
    alert('Successfully logged out');
  }

}
