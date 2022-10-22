import React from 'react';
import md5 from 'md5';
import { BASE_URL, PUBLIC_KEY, PRIVATE_KEY } from './key-api';

const generateCredentials = () => (
    `ts=${Date.now()}&apikey=${PUBLIC_KEY}&hash=${md5(`${Date.now()}${PRIVATE_KEY}${PUBLIC_KEY}`)}`
);
export const BaseUrl = `${BASE_URL}characters?&${generateCredentials()}`;

export const UrlCharacter = (id) => `${BASE_URL}characters/${id}?&${generateCredentials()}`;

export async function getCharacters() {
    const res = await (await fetch(BaseUrl)).json();
    return res.data;
};

export async function getCharacter(id) {
    const res = await fetch(UrlCharacter(id));
    const data = await res.json();
    return data.data.results[0];
};