import { writable } from 'svelte/store';

export const form = writable({
  name: '',
  message: '',
  contacts: ''
});

export const submitPending = writable(false);
export const submitFailure = writable(false);
export const submitSuccess = writable(false);
export const formModalShown = writable(false);
