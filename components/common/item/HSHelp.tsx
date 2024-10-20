import { useState } from "react";
import HSTooltip from "./HSTooltip";

export default function HSHelp({text}: {text: string}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="" style={{borderRadius: '50%', width: 17, height: 17}}>
      <span style={{color: '#000'}}>?</span>
      <HSTooltip text={text} active={hovered} width={195} top={27} left={15}/>
      <style jsx>{`
        div {
          cursor: help;
        }
      `}</style>
    </div>
  )
}