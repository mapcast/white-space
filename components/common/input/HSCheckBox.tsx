import root from 'react-shadow';

export default function HSCheckBox({value, checked, text, onClick}: {value: string, checked: boolean, text?: string, onClick: () => void}) {
  return (
    <root.div>
      <label style={{display: 'flex', alignItems: 'center', gap: 5}}>
        <input type="checkbox" value={value} checked={checked} onClick={onClick} style={{display:'none'}}/>
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
          {checked ? 
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"
            style={{fill: '#FFF'}}>
            <path d="M 42.960938 8.9804688 A 2.0002 2.0002 0 0 0 41.585938 9.5859375 L 17 34.171875 L 6.4140625 23.585938 A 2.0002 2.0002 0 1 0 3.5859375 26.414062 L 15.585938 38.414062 A 2.0002 2.0002 0 0 0 18.414062 38.414062 L 44.414062 12.414062 A 2.0002 2.0002 0 0 0 42.960938 8.9804688 z"></path>
          </svg> : <></>}
        </div>
        <span>{text}</span>
      </label>
    </root.div>
   
  )
}