'use client'

import SimpleArrow from "./item/SimpleArrow"

export default function HSStepper({items, step, setStep}: {items: HSItem[], step: string, setStep: (step: string) => void}) {
  return (
    <div style={{display: 'flex', height: 38}}>
      {items.map((item: HSItem, index: number) =>
      <>
        {index > 0 ? 
        <div style={{height: '100%', width: 45, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <SimpleArrow/>
        </div> : <></>} 
        <div style={{cursor: 'pointer'}} key={index} onClick={() => setStep(item.raw)}>
          <span style={{fontWeight: item.raw === step ? 800 : 400, fontSize: 14}}>{`Step ${index}`}</span><br/>
          <span style={{fontSize: 12}}>{item.display}</span>
        </div>
      </>
      )}
    </div>
  )
}