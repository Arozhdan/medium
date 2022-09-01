import { AuthStateInterface } from 'src/app/auth/types/auth-state.interface';
import { FeedStateInterface } from '../modules/feed/types/feed-state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
