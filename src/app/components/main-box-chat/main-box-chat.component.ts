import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-main-box-chat',
  templateUrl: './main-box-chat.component.html',
  styleUrls: ['./main-box-chat.component.scss'],
})
export class MainBoxChatComponent {
  fromUID: string = '';
  user: any;
  message: string = '';
  chats$ = this.chatService.chats$;

  constructor(
    private chatService: ChatService,
    public authService: AuthService
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
        // this.chatService.addChat(chat);
        this.message = '';
      }
    }
  }
}
