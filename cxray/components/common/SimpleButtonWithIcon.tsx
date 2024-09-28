import { MouseEventHandler, useState } from "react";

export default function SimpleButtonWithIcon({width, color, text, image, imageWidthRatio, imageHeightRatio, onClick}: 
  {width: any, color: string, text: String, 
    image: string, imageWidthRatio: number, imageHeightRatio: number, onClick: MouseEventHandler<HTMLButtonElement>}) {
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
      borderRadius: '20px',
      color: hovered ? '#222' : color,
      fontWeight: hovered ? 800 : 400,
      background: hovered ? color : 'transparent',
      fontSize: '16px',
      border: `2px solid ${color}`,
      height: '100%',
      opacity: hovered ? 1 : 0.8,
      transition: 'all 0.5s'
    }} 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={onClick}>
      <div style={{position: 'absolute', left: 30, top: 7, width: '25px', height: '25px', borderRadius: '50%', background: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={image} style={{width: `${imageWidthRatio}%`, height: `${imageHeightRatio}%`}}/> 
      </div>
      <span>{text}</span>
      
    </button>
  )
}