import { UserInterface } from 'interfaces/user';
import { ConferenceInterface } from 'interfaces/conference';
import { GetQueryInterface } from 'interfaces';

export interface ParticipantInterface {
  id?: string;
  user_id: string;
  conference_id: string;
  joined_at?: any;
  left_at?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  conference?: ConferenceInterface;
  _count?: {};
}

export interface ParticipantGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  conference_id?: string;
}
