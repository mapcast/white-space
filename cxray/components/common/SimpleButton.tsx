import { MouseEventHandler, useState } from "react";

export default function SimpleButton({width, color, text, onClick, height, fontSize, square, disabled}: 
  {width: any, color: string, text: String, onClick: MouseEventHandler<HTMLButtonElement>, height?: number, fontSize?: number, square?: boolean, disabled?: boolean}) {
  let hoveredBG = '';
  if(color.includes('#')) {
    hoveredBG = color.replace(/^#/, '');

    if (hoveredBG.length === 3) {
      hoveredBG = hoveredBG.split('').map(x => x + x).join('');
    }

    // HEX 색상 코드를 RGB로 변환
    const r = parseInt(hoveredBG.substring(0, 2), 16);
    const g = parseInt(hoveredBG.substring(2, 4), 16);
    const b = parseInt(hoveredBG.substring(4, 6), 16);

    hoveredBG = `rgba(${r}, ${g}, ${b}, 0.3)`;
  } else if(color.includes('rgb')) {
    const matches = color.match(/\d+/g);
    if (!matches || matches.length !== 3) {
      throw new Error('Invalid RGB color format');
    }
    const [r, g, b] = matches.map(Number);

    hoveredBG = `rgba(${r}, ${g}, ${b}, 0.3)`;
  }

  const [hovered, setHovered] = useState(false);
  return (
    <button 
    style={{
      width,
      position: 'relative',
      borderRadius: square ? '0' : '20px',
      color,
      background: hovered ? hoveredBG : 'transparent',
      fontSize: fontSize ? `${fontSize}px` : '16px',
      border: `1px solid ${color}`,
      height: height ? height : '100%',
      transition: 'all 0.5s'
    }} 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={onClick}
    disabled={disabled ? disabled : false}>
      {text}
    </button>
  )
}