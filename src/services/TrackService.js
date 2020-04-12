import { getFunc } from '@/services/index';

export const allTracks = () => getFunc(`tracks`);
export const allSubmissions = (track_id) => getFunc(`track/${track_id}/submissions`);
export const allPlayers = (track_id) => getFunc(`track/${track_id}/players`);