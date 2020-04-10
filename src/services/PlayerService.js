import { postFunc} from '@/services/index';

export const createPlayer = (payload) => postFunc(`players/create`, payload);