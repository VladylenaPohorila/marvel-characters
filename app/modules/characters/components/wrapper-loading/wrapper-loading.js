import React from 'react';
import { Loading } from '../../../components';

export const WrapperLoading = ({ data, children }) => {
  return !data || !Object.keys(data).length ? <Loading /> : children
}