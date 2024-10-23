'use client';
import { useState } from 'react';
import HSButton from '../common/input/HSButton';
import HSDrawer from '../common/menu/drawer/HSDrawer';

export default function Simple({contents}: any) {
  const [background, setBackground] = useState('#FFF');
  return (
    <div style={{width: '100%', height: '100%', background}}>
      <div style={{position: 'fixed', right: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton text="red" onClick={() => setBackground("#FF8A8A")}/>
        <HSButton text="blue" onClick={() => setBackground("#BCF2F6")}/>
        <HSButton text="green" onClick={() => setBackground("#C9E9D2")}/>
        <HSButton text="white" onClick={() => setBackground("#FFF")}/>
        <HSButton text="black" onClick={() => setBackground("#000")}/>
      </div>
      <HSDrawer/>
      {contents}
    </div>
  );
}