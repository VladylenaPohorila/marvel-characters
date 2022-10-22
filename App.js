import React from 'react';
import { NativeRouter} from 'react-router-native';
import { RoutersApp } from './app/routers/routersApp';

export default function App() {
  return (
    <NativeRouter>
      <RoutersApp/>
    </NativeRouter>
  );
}
