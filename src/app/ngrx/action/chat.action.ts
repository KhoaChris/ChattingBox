import { Chat } from '../../models/chat.models';
import { createAction, props } from '@ngrx/store';

export const ChatActions = {
  getPrevMessages: createAction(
    '[Chat] Get Prev Message',
  ),
  getPrevMessagesSuccess: createAction(
    '[Chat] Get Prev Message Success',
    props<{ messages: Chat[] }>()
  ),
  getPrevMessagesFailure: createAction(
    '[Chat] Get Prev Message Failure',
    props<{ error: string }>()
  ),

  getMessages: createAction(
    '[Chat] Get Message',
  ),
  getMessagesSuccess: createAction(
    '[Chat] Get Message Success',
    props<{ messages: Chat[] }>()
  ),
  getMessagesFailure: createAction(
    '[Chat] Get Message Failure',
    props<{ error: string }>()
  ),

};
