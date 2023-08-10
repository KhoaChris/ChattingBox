import { Chat } from '../../models/chat.models';
import { createAction, props } from '@ngrx/store';

export const ChatActions = {
  getPrevMessage: createAction(
    '[Chat] Get Prev Message',
    props<{ roomId: string }>()
  ),
  getPrevMessagesSuccess: createAction(
    '[Chat] Get Prev Message Success',
    props<{ messages: Chat[] }>()
  ),
  getPrevMessagesFailure: createAction(
    '[Chat] Get Prev Message Failure',
    props<{ error: string }>()
  ),
};
