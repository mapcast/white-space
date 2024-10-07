import root from 'react-shadow';

export default function HSCheckBox({value, checked, text, onChange}: {value: string, checked: boolean, text?: string, onChange: () => void}) {
  return (
    <div style={{display: 'inline-block', padding: '2px 0'}}>
      <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
        <input type="checkbox" value={value} checked={checked} onChange={onChange} style={{display:'none'}}/>
        <div style={
          {
            width: 16, 
            height: 16, 
            borderRadius: '5px', 
            border: checked ? '2px solid rgba(255,255,255,0.2)' : '2px solid rgba(0,0,0,0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: checked ? '#4379F2' : 'transparent',
            
          }
        }>
          <div style={{width: '57%', height: '60%', background: checked ? '#FFF' : 'transparent', borderRadius: 1, transform: 'translateY(0.5px)'}}/>
        </div>
        <span>{text}</span>
      </label>
    </div>
    
   
  )
}