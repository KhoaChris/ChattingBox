import { ChatService } from '../../services/chat.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { ChatActions } from '../action/chat.action';
import { Chat } from 'src/app/models/chat.models';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions, private chatService: ChatService) {}

  getPrevMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.getPrevMessages),
      switchMap((message) => {
        return from(
          this.chatService.getChats()
        ).pipe(
          map((result: Chat[]) => {
            return ChatActions.getPrevMessagesSuccess({ messages: result });
          }),
          catchError((error) => {
            return of(ChatActions.getPrevMessagesFailure({ error: error }));
          })
        );
      })
    )
  );

  getMessages$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ChatActions.getMessages),
    switchMap((message) => {
      return from(
        this.chatService.chats$
      ).pipe(
        map((result: Chat[]) => {
          return ChatActions.getMessagesSuccess({ messages: result });
        }),
        catchError((error) => {
          return of(ChatActions.getMessagesFailure({ error: error }));
        })
      );
    })
  )
);
}