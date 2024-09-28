import root from 'react-shadow';

export default function HSCheckBox({value, checked, text, onClick}: {value: string, checked: boolean, text?: string, onClick: () => void}) {
  return (
    <root.div>
      <label style={{display: 'flex', alignItems: 'center', gap: 5}}>
        <input type="checkbox" checked={checked} onClick={onClick} style={{display:'none'}}/>
        <div style={
          {
            width: 16, 
            height: 16, 
            borderRadius: '5px', 
            border: '2px solid #888',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: checked ? '#4379F2' : 'transparent'
          }
        }>
          {/*투명 체크 이미지 찾기 */}
          {checked ? <img src={''} style={{width: '90%', aspectRatio: '1/1'}}/> : <></>}
        </div>
        <span>{text}</span>
      </label>
    </root.div>
   
  )
}