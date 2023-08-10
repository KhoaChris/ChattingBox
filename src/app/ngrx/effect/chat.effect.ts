import { ChatService } from '../../services/chat.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { ChatActions } from '../action/chat.action';

@Injectable()
export class ChatEffects {
  constructor(private actions$: Actions, private chatService: ChatService) {}

  getMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChatActions.getPrevMessage),
      switchMap((message) => {
        return from(
          this.chatService.getPrevMessagesByRoomId(message.roomId)
        ).pipe(
          map((result: any) => {
            return ChatActions.getPrevMessagesSuccess({ messages: result });
          }),
          catchError((error) => {
            return of(ChatActions.getPrevMessagesFailure({ error: error }));
          })
        );
      })
    )
  );
}