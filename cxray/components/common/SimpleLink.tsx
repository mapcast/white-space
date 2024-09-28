import { MouseEventHandler, useState } from "react";

export default function SimpleLink({text, fontSize, onClick}: {text: String, fontSize?: number, onClick: MouseEventHandler<HTMLButtonElement>}) {
  const [hovered, setHovered] = useState(false);

  const style = {
    color: hovered ? 'rgb(119,220,255)' : 'rgb(49,160,248)',
    fontSize: fontSize ? fontSize : 12,
    transition: 'all 0.5s'
  }

  return <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={onClick} style={style}>{text}</button>

}