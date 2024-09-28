import { useEffect, useRef, useState } from "react";
import arrowIcon from "@/public/assets/icons/xitm/down_arrow_02.png";

export default function XitmFilteringSelectBox({value, setValue, items, filteredItems, width, height, warning}: 
  {value: string, setValue: Function, items: SelectItem[], filteredItems: SelectItem[], width: any, height: any, warning: boolean}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  function setValues(item: SelectItem) {
    setValue(item.value);
    setActive(false);
  }

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
    const handleScrollOutside = (event: any) => {
      //if(ref.current && !ref.current.contains())
      setActive(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
  <div className="xitm-select" style={{width, height}} ref={ref}>
    <button onClick={(e) => {setTopLeft(e); setActive(!active)}} className={`xitm-select-label ${warning ? 'warning' : ''}`}>
      {value === '' ? 'Select' : items.filter((item: SelectItem) => value === item.value)[0].display}
      <div style={{width: '30px', height: '100%'}} className="element-to-center">
        {active ? 
        <img style={{transform: 'rotate(180deg)', height: '20%'}} src={arrowIcon.src}/> :
        <img style={{height: '20%'}} src={arrowIcon.src}/>}
      </div>
    </button>
    {active ?  
    <ul className={`xitm-select-options ${active ? 'active' : ''}`} style={{width, top, left}}>
      {filteredItems.map((item: SelectItem, index: number) => <li className="xitm-select-option ellipse" key={index} value={item.value} onClick={() => setValues(item)}>{item.display}</li>)}
    </ul>: <></>}
  </div>)
}