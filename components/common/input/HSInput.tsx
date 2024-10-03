'use client'
import { useRef, useState } from 'react';
import root from 'react-shadow';

export default function HSInput({type, value, setValue, disabled, placeholder, pushEnter}: 
  {type: 'text'|'number', value: string, setValue: (val: string) => void,
    disabled?: boolean, placeholder?: string, pushEnter?: () => void}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement|null>(null);

  function handleFocus() {
    if(!focused) setFocused(true);
  }

  function handleBlur() {
    if(value === '') setFocused(false);
  }

  function clickPlaceholder() {
    if(ref.current != null) ref.current.focus();
  }

  function checkPushEnter(e: React.KeyboardEvent) {
    if(e.key === 'enter' && pushEnter) {
      pushEnter();
    }
  }

  return (
    <root.div>
      <div style={{position: 'relative', borderBottom: '1px solid #000', paddingTop: 10, paddingBottom: 2}}>
        {placeholder ? <span onClick={clickPlaceholder} className={`big-input-placeholder ${focused || value.length > 0 ? 'focused' : ''}`}>
          {placeholder}
        </span> : <></>}
        <input type={type} value={value} 
        style={{border: 'none', outline: 'none', background: 'transparent'}} 
        onKeyDown={checkPushEnter} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e: any) => {setValue(e.target.value)}}
        disabled={disabled ? disabled : false}/>
      </div>
      <style>{`
        .big-input-placeholder {
          position: absolute;
          color: #666;
          font-size: 14px;
          top: 10px;
          left: 2px;
          transition: all 0.3s ease;
        }
        .big-input-placeholder.focused {
          font-size: 10px;
          top: 0;
        }
      `}</style>
    </root.div>
  )
  
}