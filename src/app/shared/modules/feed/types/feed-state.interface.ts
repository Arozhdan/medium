import { GetFeedReponseInterface } from './get-feed-repsponse.interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: string | null;
  data: GetFeedReponseInterface | null;
}
