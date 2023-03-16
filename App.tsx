import React, { useState } from 'react';
import './style.css';
import List from './List';

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const them = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
  };

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  return (
    <div style={them}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prvDark) => !prvDark)}>
        Toogle Them
      </button>
      <List itemList={getItems} />
    </div>
  );
}
