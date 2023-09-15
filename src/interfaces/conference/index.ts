import { ParticipantInterface } from 'interfaces/participant';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ConferenceInterface {
  id?: string;
  title: string;
  start_time: any;
  end_time: any;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  participant?: ParticipantInterface[];
  organization?: OrganizationInterface;
  _count?: {
    participant?: number;
  };
}

export interface ConferenceGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  organization_id?: string;
}
