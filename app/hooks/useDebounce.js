import React, { useState, useEffect } from 'react';

export const useDebounce = (value, time) => {
    const [debounValue, setDebaunValue] = useState(value);

    useEffect(() => {
        const wait = setTimeout(() => setDebaunValue(value), time);
        return () => { clearTimeout(wait) }
    }, [value]);

    return debounValue;
};