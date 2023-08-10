import { Chat } from '../../models/chat.models';
import { createReducer, on } from "@ngrx/store";
import { ChatState } from '../state/chat.state';
import { ChatActions } from "../action/chat.action";


const initialState: ChatState = {
    message: null,
    messages: [],
    loading: false,
    error: '',
}

export const ChatReducer = createReducer(
    initialState,
    on(ChatActions.getPrevMessage, (state) => {
        return {
            ...state,
            loading: true,
            error: '',
        }
    }),
    on(ChatActions.getPrevMessagesSuccess, (state, action) => {
        return {
            ...state,
            messages: action.messages,
            loading: false,
            error: '',
        }
    }),
    on(ChatActions.getPrevMessagesFailure, (state, { error }) => {
        return {
            ...state,
            loading: false,
            error,
        }
    })
)
