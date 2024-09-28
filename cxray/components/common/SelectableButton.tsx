import { MouseEventHandler, useState } from "react";

export default function SelectableButton({width, text, color, selectedColor, selected, onClick, height, fontSize, square}: 
  {width: any, text: String, selected: boolean, onClick: MouseEventHandler<HTMLButtonElement>, 
    color?: string, selectedColor?: string, height?: number, fontSize?: number, square?: boolean}) {

  if(color == null) color = "#BBB";
  if(selectedColor == null) selectedColor = "rgb(112,173,71)";

  const [hovered, setHovered] = useState(false);
  return (
    <button 
    style={{
      width,
      position: 'relative',
      borderRadius: square ? '0' : '20px',
      color: selected ? selectedColor : hovered ? selectedColor : color,
      background: 'transparent',
      fontSize: fontSize ? `${fontSize}px` : '16px',
      border: `1px solid ${selected ? selectedColor : hovered ? selectedColor : color}`,
      height: height ? height : '100%',
      transition: 'all 0.5s'
    }} 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={onClick}>
      {text}
    </button>
  )
}