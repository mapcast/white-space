import high from '@/public/assets/icons/cxray/high_01.png';
import medium from '@/public/assets/icons/cxray/medium_01.png';
import low from '@/public/assets/icons/cxray/low_01.png';

export default function Severity({severity}: {severity: string}) {
  return (
    <>
      {severity === 'critical' ? 
      <>
        <span>CRITICAL</span>
        <img src={high.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      : 
      severity === 'high' ? 
      <>
        <span>HIGH</span>
        <img src={high.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      :
      severity === 'medium' ? 
      <>
        <span>MEDIUM</span>
        <img src={medium.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      :
      severity === 'low' ? 
      <>
        <span>LOW</span>
        <img src={low.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      :
      severity === 'info' ? 
      <>
        <span>INFO</span>
        <img src={low.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      :
      severity === '' || severity == null ? 
      <>
        <span>-</span>
      </>
      : <></>}
    </>
  )
}