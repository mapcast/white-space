import { useRef, useState } from "react";
import HSHelp from "../item/HSHelp";

export default function HSBigInput({fieldName, fieldValue, setFieldValue, imageSrc, width, reduceBottomPadding, type, help, disabled}: 
  {fieldName: string, fieldValue: string, setFieldValue: Function, imageSrc?: string, width?: number, reduceBottomPadding?: boolean, type?: string, help?: string, disabled?: boolean}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLInputElement|null>(null);

  function handleFocus() {
    if(!focused) setFocused(true);
  }

  function handleBlur() {
    if(fieldValue === '') setFocused(false);
  }

  function clickPlaceholder() {
    if(ref.current != null) ref.current.focus();
  }

  return (
    <div className={`big-input-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`} style={{width: width ? width : 400, position: 'relative'}}>
      {imageSrc ? 
      <div className={`big-input-image-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`}>
        <img src={imageSrc} className="big-input-image"/>  
      </div> : <></>}
      <div className={`big-input-input-wrap ${reduceBottomPadding ? 'reduce-padding' : ''}`}>
        <span onClick={clickPlaceholder} className={`big-input-placeholder ${focused || fieldValue.length > 0 ? 'focused' : ''}`}>{fieldName}</span>
        <input ref={ref} type={type ? type : 'text'} className="big-input" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled ? disabled : false}/>
      </div>
      {help ? 
      <div style={{position: 'absolute', right: 5, height: '100%', display: 'flex', alignItems: 'end', justifyContent: 'center'}}>
        <div style={{paddingBottom: reduceBottomPadding ? 10 : 20}}>
          <HSHelp text="8자리 이상, 특수문자를 포함해야 합니다."/>
        </div>
      </div> : <></>}
      <style jsx>{`
        input {
          outline: none;
        }
        .big-input-wrap {
          height: 60px; 
          display: flex;
          border-bottom: 1px solid #000;
        }
        .big-input-wrap.reduce-padding {
          height: 50px;
        }
        .big-input-image-wrap {
          display: flex; 
          justify-content: center;
          align-items: end; 
          width: 50px;
          padding-bottom: 20px;
        }
        .big-input-image-wrap.reduce-padding {
          padding-bottom: 10px;
        }
        .big-input-image {
          width: 20px;
          height: 20px;
        }
        .big-input-input-wrap {
          flex: 1; 
          padding: 20px 0;
          position: relative;
        }
        .big-input-input-wrap.reduce-padding {
          padding-bottom: 10px;
        }
        .big-input {
          background: transparent;
          border: none;
          width: 90%;
          color: #000;
        }
        .big-input-placeholder {
          position: absolute;
          color: #666;
          font-size: 12px;
          top: 24px;
          left: 2px;
          transition: all 0.3s ease;
        }
        .big-input-placeholder.focused {
          font-size: 9px;
          top: 10px;
        }
      `}</style>
    </div>
  )
}