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
  constructor(
    private chatService: ChatService,
    private authService: AuthService
  ) {}
}
