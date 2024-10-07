import root from 'react-shadow';

export default function HSRadio({selected, value, text, onClick}: {selected: string, value: string, text?: string, onClick: (val: string) => void}) {
  return (
    <div style={{display: 'inline-block', padding: '2px 0'}}>
      <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
        <input type="radio" value={value} checked={selected === value} onChange={() => onClick(value)} style={{display:'none'}}/>
        <div style={
          {
            width: 16, 
            height: 16, 
            borderRadius: '50%', 
            border: selected === value ? '2px solid rgba(255,255,255,0.2)' : '2px solid rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: selected === value ? '#4379F2' : 'transparent',
            
          }
        }>
          <div style={{width: '60%', height: '60%', background: selected === value ? '#FFF' : 'transparent', borderRadius: '50%', transform: 'translateY(0.5px)'}}/>
        </div>
        <span>{text}</span>
      </label>
    </div>
    
   
  )
}