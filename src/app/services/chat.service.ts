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
import { Subject, of, startWith } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Store } from '@ngrx/store';
import { ChatState } from '../ngrx/state/chat.state';
import { ChatActions } from '../ngrx/action/chat.action';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  chatCollection = collection(this.firestore, 'chat');
  chats$ = new Subject<Chat[]>();

  constructor(private firestore: Firestore, private store: Store<{ chats: ChatState}>) {
    onSnapshot(this.chatCollection, (querySnapShot) => {
      const result = querySnapShot.docs;
      const chats = result
        .map((doc) => doc.data() as Chat)
        .sort((a, b) => a.sendAt - b.sendAt);
      this.chats$.next(chats);
      this.store.dispatch(ChatActions.getMessages());
    });

    this.chats$.pipe(
      startWith([])
    )
  }

  async addChat(message: Chat){
    await addDoc(this.chatCollection, message);
  }

  async getChats() {
    const snapShots = await getDocs(this.chatCollection);
    const chats = snapShots.docs.map((doc) => doc.data() as Chat).sort((a, b) => a.sendAt - b.sendAt);
    return chats;
  }

  // constructor(public http: HttpClient, public socket: Socket){
    
  // }
}
