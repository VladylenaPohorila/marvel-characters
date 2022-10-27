import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import { View } from 'react-native';
import { useDebounce } from '../../hooks/useDebounce';
import { BaseUrl, SearchUrl } from '../../utilits/getData';

export const Characters = () => {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchWait = useDebounce(searchQuery, 300);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(searchWait ? SearchUrl(searchWait) : BaseUrl);
        const data = await res.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [BaseUrl, searchWait]);

  return (
    <View>
      <Outlet context={{ data, searchQuery, setSearchQuery }} />
    </View>
  )
}