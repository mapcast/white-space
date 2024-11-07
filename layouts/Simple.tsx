'use client';
import { useState } from 'react';
import HSButton from '../components/common/input/HSButton';
import HSDrawer from '../components/common/menu/drawer/HSDrawer';
import { Roboto } from 'next/font/google';

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function Simple({children}: WrapperProp) {
  const [background, setBackground] = useState('#FFF');
  return (
    <div style={{width: '100%', height: '100%', background, minWidth: 1024, minHeight: 600, overflow: 'auto'}} className={font.className}>
      <div style={{position: 'fixed', right: 10, top: 10, display: 'flex', gap: 10}}>
        <HSButton text="red" onClick={() => setBackground("#FF8A8A")}/>
        <HSButton text="blue" onClick={() => setBackground("#BCF2F6")}/>
        <HSButton text="green" onClick={() => setBackground("#C9E9D2")}/>
        <HSButton text="white" onClick={() => setBackground("#FFF")}/>
        <HSButton text="black" onClick={() => setBackground("#000")}/>
      </div>
      <HSDrawer/>
      {children}
    </div>
  );
}