import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  fromUID: string = '';
  user: any;
  message: string = '';
  chats$ = this.chatService.chats$;

  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      this.user = user;
      this.fromUID = user.displayName;
    });
  }

  sendMessage() {
    if (this.user == null) {
      alert('Please login first to use this function');
    } else {
      let chat = {
        from: this.fromUID,
        to: '',
        message: this.message,
        sendAt: Date.now(),
      };
      if (this.message == '') {
        this.message = '';
        alert('Please enter a message');
      } else if (!this.message.trim()) {
        this.message = '';
      } else {
        this.chatService.addChat(chat);
        this.message = '';
      }
    }
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
