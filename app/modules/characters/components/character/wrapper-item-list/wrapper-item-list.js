import React from 'react';

export const WrapperItemList = ({ data, children }) => {
  return data.length !== 0 ? children : null
}