import axios from 'axios';
import queryString from 'query-string';
import { ConferenceInterface, ConferenceGetQueryInterface } from 'interfaces/conference';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getConferences = async (
  query?: ConferenceGetQueryInterface,
): Promise<PaginatedInterface<ConferenceInterface>> => {
  const response = await axios.get('/api/conferences', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createConference = async (conference: ConferenceInterface) => {
  const response = await axios.post('/api/conferences', conference);
  return response.data;
};

export const updateConferenceById = async (id: string, conference: ConferenceInterface) => {
  const response = await axios.put(`/api/conferences/${id}`, conference);
  return response.data;
};

export const getConferenceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/conferences/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteConferenceById = async (id: string) => {
  const response = await axios.delete(`/api/conferences/${id}`);
  return response.data;
};
