export default function DoubleArrow({dark, rotate}: {dark?: boolean, rotate?: number}) {
  //min = 24px
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
    style={{
      fill: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
      transform: `rotate(${rotate ? `${rotate}deg` : '0'})`
    }}>
      <path d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z"/><path d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z"/>
    </svg>
  );
}
