import React from 'react';
import md5 from 'md5';
import { BASE_URL, PUBLIC_KEY, PRIVATE_KEY } from './key-api';

const generateCredentials = () => (
    `ts=${Date.now()}&apikey=${PUBLIC_KEY}&hash=${md5(`${Date.now()}${PRIVATE_KEY}${PUBLIC_KEY}`)}`
);
export const BaseUrl = `${BASE_URL}characters?&${generateCredentials()}`;

export const UrlCharacter = (id) => `${BASE_URL}characters/${id}?&${generateCredentials()}`;

export const SearchUrl = query =>
    `${BASE_URL}characters?nameStartsWith=${query}&${generateCredentials()}`;
