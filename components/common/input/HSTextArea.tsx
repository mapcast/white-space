import { useRef, useState } from "react";
import HSHelp from "../item/HSHelp";

export default function HSTextArea({fieldName, fieldValue, setFieldValue, width, height, disabled}: 
  {fieldName: string, fieldValue: string, setFieldValue: Function, width?: number, height?:number, disabled?: boolean}) {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLTextAreaElement|null>(null);

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
    <div className="textarea-wrap" style={{width: width ? width : 400, height: height ? height: 200, position: 'relative'}}>
      <div className="textarea-input-wrap">
        <span onClick={clickPlaceholder} className="textarea-title">{fieldName}</span>
        <textarea ref={ref} spellCheck="false" value={fieldValue} onChange={(e) => setFieldValue(e.target.value)} onFocus={handleFocus} onBlur={handleBlur} disabled={disabled ? disabled : false}/>
      </div>
      <style jsx>{`
        .textarea-wrap {
          display: flex;
          border-bottom: 1px solid #000;
          border-top: 1px solid #000;
        }
        .textarea-input-wrap {
          flex: 1; 
          padding: 15px 0 10px 0;
          position: relative;
        }
        textarea {
          background: transparent;
          border: none;
          width: 100%;
          height: 100%;
          color: #000;
          resize: none;
          outline: none;
          font-size: 12px;
        }
        .textarea-title {
          position: absolute;
          color: #666;
          font-size: 9px;
          top: 5px;
          left: 2px;
        }
      `}</style>
    </div>
  )
}