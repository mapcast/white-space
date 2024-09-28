import { useEffect, useRef, useState } from "react";
import arrowIcon from "@/public/assets/icons/xitm/down_arrow_02.png";
import minusIcon from '@/public/assets/icons/xitm/delete_04.png';
import KeyValue from "@/components/common/KeyValue";
import KeyValueCenter from "../KeyValueCenter";
import KeyValueBox from "../KeyValueBox";


export default function XitmKeyValueBox({keyValues, removeKeyValue, width, height}: 
  {keyValues: KeyValueWithDisplay[], removeKeyValue: Function, width: any, height: any}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  function setTopLeft(event: any) {
    if(!event.target.classList.contains('xitm-select-label')) {
      const rect = event.target.parentNode.parentNode.getBoundingClientRect();
      setTop(rect.top + height + 3);
      setLeft(rect.left);
    } else {
      const rect = event.target.parentNode.getBoundingClientRect();
      setTop(rect.top + height + 3);
      setLeft(rect.left);
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if(ref.current && !ref.current.contains(event.target)) setActive(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
  <div className="xitm-select" style={{width, height}} ref={ref}>
    <button onClick={(e) => {setTopLeft(e); setActive(!active);}} className="xitm-select-label">
      <span>{`검색 항목 (${keyValues.length})`}</span>
      <div style={{width: '30px', height: '100%'}} className="element-to-center">
        {active && keyValues.length > 0 ? 
        <img style={{transform: 'rotate(180deg)', height: '20%'}} src={arrowIcon.src}/> :
        <img style={{height: '20%'}} src={arrowIcon.src}/>}
      </div>
    </button>
    {active && keyValues.length > 0 ?        
    <ul className={`xitm-select-options ${active ? 'active' : ''}`} style={{width, top, left}}>
      {keyValues.map((item: KeyValueWithDisplay) => 
      <li className="xitm-key-value-option" key={item.key}>
        <KeyValueBox name={item.keyDisplay} value={item.valueDisplay}/>
        <button onClick={() => removeKeyValue(item.key)}><img src={minusIcon.src} style={{width: '14px'}}/></button>
      </li>)}
    </ul>: <></>}
  </div>)
}