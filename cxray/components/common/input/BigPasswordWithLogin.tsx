import { KeyboardEventHandler, useRef, useState } from "react";

export default function BigPasswordWithLogin({fieldName, fieldValue, setFieldValue, handleLogin, enterCheck, imageSrc, buttonImageSrc, width}: 
  {fieldName: string, fieldValue: string, setFieldValue: Function, handleLogin: Function, enterCheck?:KeyboardEventHandler, imageSrc?: string, buttonImageSrc: string, width?: number}) {
  const [focused, setFocused] = useState(false);
  const [hoverOnButton, setHoverOnButton] = useState(false);
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
    <div className="big-input-wrap" style={{width: width ? width : 400}}>
      {imageSrc ? 
      <div className="big-input-image-wrap">
        <img src={imageSrc} className="big-input-image"/>  
      </div> : <></>}
      <div className="big-input-input-wrap">
        <span onClick={clickPlaceholder} className={`big-input-placeholder ${focused || fieldValue.length > 0 ? 'focused' : ''}`}>{fieldName}</span>
        <input ref={ref} type="password" className="big-input" value={fieldValue} onKeyDown={enterCheck} onChange={(e) => setFieldValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur}/>
      </div>
      <div className="big-input-image-wrap">
        <button style={{width: '100%', height: '100%'}} className="element-to-center" onClick={(e) => handleLogin(e)} onMouseEnter={() => setHoverOnButton(true)} onMouseLeave={() => setHoverOnButton(false)}>
          <img src={buttonImageSrc} style={{borderRadius: '50%'}} className={`login-button-image ${hoverOnButton ? 'hovered' : ''}`}/>  
        </button>
      </div>
      <style jsx>{`
        .big-input-wrap {
          height: 60px; 
          display: flex;
          border-bottom: 1px solid white;
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
        .big-input {
          background: transparent;
          border: none;
          width: 90%;
          color: white;
        }
        .big-input-placeholder {
          position: absolute;
          color: #AAA;
          font-size: 12px;
          top: 24px;
          left: 2px;
          transition: all 0.3s ease;
        }
        .big-input-placeholder.focused {
          font-size: 9px;
          top: 10px;
        }
        .login-button-wrap {
          padding: 14.5px 10px;
        }
        .login-button-image {
          width: 22px;
          height: 22px;
          transition: all 0.1s ease;
        }
        .login-button-image.hovered {
          width: 25px;
          height: 25px;
        }
        .big-input-image-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
        }
        .big-input-image {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </div>
  )
}