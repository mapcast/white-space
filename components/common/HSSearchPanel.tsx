'use client';
import { useState } from "react";
import HSSelectBox from "./HSSelectBox";

import { Roboto } from "next/font/google";
const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function HSSearchPanel({items, search, useMultiple, dark}: 
  {items: HSItem[], search: (key: string, value: string) => void, useMultiple?: boolean, dark?: boolean}) {
  //const [multiple, setMultiple] = useState(false);
  const [searchKey, setSearchKey] = useState<HSItem|null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
      <div style={{display: 'flex', gap: 5, fontSize: '14px', height: 27}} className={font.className}>
        <HSSelectBox items={items} selected={searchKey} setSelected={setSearchKey} dark={dark}/>
        <input style={{
          border: dark ? '1px groove rgba(255,255,255,0.2)' : '1px groove rgba(0,0,0,0.2)', 
          fontSize: '14px',
          paddingLeft: '5px',
          borderRadius: '5px',
          outline: 0}}
        type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button disabled={searchKey === null} 
        onClick={() => search(searchKey ? searchKey.raw.toString() : '', searchValue)}>검색</button>
        {useMultiple ? <></> : <></>}
      </div>
  );
}