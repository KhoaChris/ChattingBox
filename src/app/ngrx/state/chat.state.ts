import { Chat } from '../../models/chat.models';
export interface ChatState {
  message: Chat | null;
  messages: Chat[]
  loading: boolean;
  error: string;
}