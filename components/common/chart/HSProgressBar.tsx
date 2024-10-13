export default function HSProgressBar({text, value, red, green, blue, textTransform}: {text: string, value: number, red: number, green: number, blue: number, textTransform?: string}) {
  return (
    <div style={{width: '100%', height: '100%', background: `rgba(${red},${green},${blue},0.3)`, position: 'relative'}}>
      <div style={{position: 'absolute', right: 7, color: '#EEE', fontSize: '0.7rem', fontWeight: 100, height: '100%', display: 'flex', alignItems: 'center', transform: textTransform}}>
        {text}
      </div>
      <div style={{width: `${value}%`, height: '100%', 
      backgroundImage: `linear-gradient(to right, rgba(${red},${green},${blue},0.2), rgb(${red},${green},${blue}))`}}/>
    </div>
  );
}
