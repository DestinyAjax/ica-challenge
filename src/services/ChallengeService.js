import { getFunc, postFunc } from '@/services/index';

export const all = () => getFunc(`challenges`);
export const create = (payload) => postFunc(`challenge/create`, payload);