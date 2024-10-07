export default function SimpleArrow({dark, rotate}: {dark?: boolean, rotate?: number}) {
  //min = 24px
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    style={{
      fill: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
      transform: `rotate(${rotate ? `${rotate}deg` : '0'})`
    }}>
      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
    </svg>
  );
}
