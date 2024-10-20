export default function HSTooltip({text, active, width, left, top}: {text: string, active: boolean, width: number, left: number, top: number}) {
  return (
    <div style={
      {
        fontSize: 10, 
        padding: 3, 
        borderRadius: 3, 
        position: 'absolute', 
        transition: 'all 0.3s ease', 
        background: '#222', 
        color: '#FFF', 
        overflow: 'auto',
        left, top, width,
        cursor: "text",
        display: active ? 'block' : 'none'
      }}>
      <div style={{padding: '0 5px'}}>{text}</div>
    </div>
  )
}