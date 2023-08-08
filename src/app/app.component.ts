import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  fromUID: string = '';
  user: any;
  message: string = '';
  chats$ = this.chatService.chats$;
  
  constructor(private chatService: ChatService,private authService:AuthService) {}
  ngOnInit(): void {
    this.authService.user$.subscribe((user: any) => {
      this.user = user;
      this.fromUID = user.uid;
    })
  }

  sendMessage(){
    let chat = {
      from: this.fromUID,
      to: '5',
      message: this.message,
      sendAt: Date.now(),
    }
    this.chatService.addChat(chat);
    this.message = '';
  }

  logIn(){
    this.authService.loginWithGoogle();
    alert ('Successfully logged in');
  }

  logOut(){
    this.authService.logoutWithGoogle();
    alert('Successfully logged out');
  }

}
