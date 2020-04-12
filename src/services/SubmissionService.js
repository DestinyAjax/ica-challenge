import { getFunc, postFunc, putFunc } from '@/services/index';

export const all = () => getFunc(`submissions`);
export const create = (payload) => postFunc(`submission/create`, payload);
export const update = (id, payload) => putFunc(`submission/${id}`, payload);