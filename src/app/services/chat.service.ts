import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from '@angular/fire/firestore';
import { Chat } from '../models/chat.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatCollection = collection(this.firestore, 'chat');
  chats$ = new Subject<Chat[]>();

  constructor(private firestore: Firestore) {
    onSnapshot(this.chatCollection, (querySnapShot) => {
      const result = querySnapShot.docs;
      const chats = result
        .map((doc) => doc.data() as Chat)
        .sort((a, b) => a.sendAt - b.sendAt);
      this.chats$.next(chats);
    });
  }

  async addChat(chat: Chat) {
    await addDoc(this.chatCollection, chat);
  }
}
