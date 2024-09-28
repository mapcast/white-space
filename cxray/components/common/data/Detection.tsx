import detected from '@/public/assets/icons/cxray/detected_01.png';
import undetected from '@/public/assets/icons/cxray/undetected_01.png';

export default function Detection({count}: {count: number | boolean | Array<any>}) {
  return (
    <>
      {typeof count === 'boolean' ? 
      <>
        {count ? 
        <>
          <span>Detected</span>
          <img src={detected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
        </> 
        : 
        <>
          <span>Undetected</span>
          <img src={undetected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
        </>}
      </>
      :
      Array.isArray(count) ? 
      <>
        {
          count.length > 0 ? 
          <>
            <span>{`Detected(${count.length})`}</span>
            <img src={detected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
          </>
          : 
          <>
            <span>Undetected</span>
            <img src={undetected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
          </>
        }
      </> 
      :
      count > 0 ? 
      <>
        <span>{`Detected(${count})`}</span>
        <img src={detected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>
      : 
      <>
        <span>Undetected</span>
        <img src={undetected.src} style={{width: '14px', marginLeft: '5px', transform: 'translateY(1px)'}}/>
      </>}
    </>
  )
}