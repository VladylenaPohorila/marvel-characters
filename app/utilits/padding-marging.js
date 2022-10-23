import React from 'react';

export const paddingNew = (a, b, c, d) => ({
    paddingTop: a,
    paddingRight: b ?? a,
    paddingBottom: c ?? a,
    paddingLeft: d ?? b ?? a
});

export const marginNew = (a, b, c, d) => ({
    marginTop: a,
    marginRight: b ?? a,
    marginBottom: c ?? a,
    marginLeft: d ?? b ?? a
});