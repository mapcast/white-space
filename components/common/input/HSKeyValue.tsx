export default function HSKeyValue({name, value, selected, onClick, width, height, fontSize, keyRatio}: 
  {name: string|number|JSX.Element, value: string|number|JSX.Element, selected?: boolean, onClick?: () => void
  width?: number, height?: number, fontSize?: number, keyRatio?:number}) {
  return (
    <div
    style={{
      cursor: 'pointer',
      width: width ? width : '100%', 
      height: height ? height: '100%', 
      fontSize: fontSize ? fontSize : 10, 
      color: selected ? 'rgb(112,173,71)' : '#000',
      display: 'flex',
      alignItems: 'center'
    }} onClick={onClick}>
      <div style={{width: `${keyRatio ? keyRatio : 50}%`}}>
        <div style={{
          height: fontSize ? fontSize + 6 : 16,
          borderRight: `1px solid ${selected ? 'rgb(112,173,71)' : '#000'}`
        }}>
          {name}
        </div>
      </div>
      <div className="ellipse" style={{
        paddingLeft: 10,
        paddingRight: 5,
        flexGrow: 1,
      }}>{value}</div>
    </div>
  )
}