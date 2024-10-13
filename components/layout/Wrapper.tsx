'use client';
import { useState } from 'react';
import HSButton from '../common/input/HSButton';

export default function Wrapper({contents}: any) {
  const [background, setBackground] = useState('#FFF');
  return (
    <div className="main-wrapper" style={{background}}>
      <div style={{position: 'fixed', right: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton text="red" onClick={() => setBackground("#FF8A8A")}/>
        <HSButton text="blue" onClick={() => setBackground("#BCF2F6")}/>
        <HSButton text="green" onClick={() => setBackground("#C9E9D2")}/>
        <HSButton text="white" onClick={() => setBackground("#FFF")}/>
        <HSButton text="black" onClick={() => setBackground("#000")}/>
      </div>
      <div className="main">{contents}</div>
    </div>
  );
}