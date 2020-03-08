import { writable } from 'svelte/store';

export const characters = writable();
export const newName = writable();
export const newRace = writable();
export const newClass = writable();