import { getFunc, postFunc, putFunc } from '@/services/index';

export const all = () => getFunc(`challenges`);
export const create = (payload) => postFunc(`challenge/create`, payload);
export const update = (id, payload) => putFunc(`challenge/${id}`, payload);
export const view = (id) => getFunc(`challenge/${id}`);