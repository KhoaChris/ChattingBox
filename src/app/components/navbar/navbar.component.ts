import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  user: any;
  image: any;
  chats$ = this.chatservice.chats$;
  fromUID: string = '';

  constructor(
    private chatservice: ChatService,
    public authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      this.user = user;
      this.image = user.photoURL;
    });
  }

  logIn() {
    this.authService.loginWithGoogle();
  }

  logOut() {
    this.authService.logoutWithGoogle();
    alert('Successfully logged out');
    this.refresh();
  }

  refresh() {
    window.location.reload();
  }
}
