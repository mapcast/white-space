
export default function HSCheckBox({value, checked, text, Switch, onChange}: {value: string, checked: boolean, text?: string, Switch?: boolean, onChange: () => void}) {
  return (
    <div style={{display: 'inline-block', padding: '2px 0'}}>
      <label style={{display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer'}}>
        <input type="checkbox" value={value} checked={checked} onChange={onChange} style={{display:'none'}}/>
        {Switch ? 
        <div style={{width: 30, height: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
          <div style={{borderRadius: '30%', width: 20, height: 10, background: checked ? '#4379F2' : 'rgba(0,0,0,0.3)'}}/>
          <div className={`switch-handle-wrap ${checked ? 'checked' : ''}`}>
            <div className={`switch-handle`}/>
          </div>
          
        </div>
        :
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
        }
        <span>{text}</span>
      </label>
      <style jsx>{`
        .switch-handle-wrap {
          position: absolute;
          padding-left: 14px;
          left: 0;
          transition: all 0.1s ease;
        }
        .switch-handle-wrap.checked {
          padding-left: 3px;
        }
        .switch-handle {
          border-radius: 50%; 
          width: 12px; height: 12px;
          background: #2359D2;
          border: 1px solid #4379F2;
        }
        
      `}</style>
    </div>
    
   
  )
}