'use client';
import { useState } from "react";
import root from 'react-shadow';

function HSSelectBoxItem({item, select, dark}: {item: HSItem, select: (val: HSItem) => void, dark?: boolean}) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <li
    onClick={() => select(item)} 
    onMouseOver={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    style={{
    padding: '3px 5px',
    background: hovered ? dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' : 'transparent'
    }}>
      {item.display ? item.display : item.raw}
    </li>
  )
}

export default function HSSelectBox({items, selected, setSelected, width, dark}: 
  {items: HSItem[], 
  selected: HSItem|null,
  setSelected: (val: HSItem) => void,
  width?: string|number, 
  dark?: boolean}) {
  //const [selected, setSelected] = useState<HSItem|null>(null);
  const [opened, setOpened] = useState(false);
  

  return (
    <root.div>
      <div style={{
        width: width ? width : 150, 
        position: 'relative',
        borderRadius: 5, 
        cursor: "pointer",
        height: 26,
        fontSize: 14,
        border: dark ? '1px groove rgba(255,255,255,0.2)' : '1px groove rgba(0,0,0,0.2)'}}>
        <div 
        onClick={() => setOpened(!opened)}
        style={{padding: '0 5px', display: 'flex', alignItems: 'center', width: '100%', height: '100%'}}>
          {selected ? selected.display ? selected.display : selected.raw : 'Select'}
        </div>
        {opened ? 
        <ul style={{
          padding: 0,
          top: 15,
          width: width ? width : 150, 
          maxHeight: 300,
          overflow: 'auto',
          position: 'absolute', 
          zIndex: 2, 
          borderRadius: 5,
          background: dark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)', 
          border: dark ? '1px groove rgba(255,255,255,0.2)' : '1px groove rgba(0,0,0,0.2)', 
          listStyleType: 'none'}}>
          {items.map((item: HSItem) => <HSSelectBoxItem item={item} select={(item: HSItem) => {setSelected(item); setOpened(false);}}/>)}
        </ul> : <></>}
      </div>
    </root.div>
    
  )
}