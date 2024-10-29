'use client';
import { useState } from "react"

export default function HSTabs({items, selected, clickTab}: {items: HSItem[], selected: string, clickTab: (tab: string) => void}) {
  const [hovered, setHovered] = useState('');
  return (
    <div style={{display: 'flex', height: 26}}>
      {items.map((item: HSItem, index: number) =>
      <div className={`hs-tab ${selected === item.raw ? 'active' : ''}`} key={index} onClick={() => clickTab(item.raw)} onMouseEnter={() => setHovered(item.raw)} onMouseLeave={() => setHovered('')}>
        <div style={{paddingLeft: 2}}>{item.display}</div>
      </div>
      )}
      <style jsx>{`
        .hs-tab {
          cursor: pointer;
          border: 1px solid rgba(0,0,0,0.2);
          border-bottom: 0;
          text-align: left;
          width: 120px;
          margin-left: 5px;
          border-radius: 5px 5px 0 0;
          font-size: 12px;
          padding-left: 5px;
          padding-top: 5px;
          box-shadow: 0 0 25px 0 rgba(0,0,0,0.1);
          box-sizing: border-box;
          background: #FFF;
        }
        .hs-tab.active {
          border-bottom: 2px solid rgba(0,0,0,0.2);
          font-weight: 800;
        }
        .hs-tab:hover {
          border-bottom: 2px solid rgba(0,0,0,0.2);
          font-weight: 800;
        }
        .hs-tab:first-child {
          margin-left: 0;
        }
        
      `}</style>
    </div>
  )
}