import ProgressBar from "./ProgressBar";

export default function PicketProgressBar({text, value, red, green, blue, picket, bigPicket}: 
  {text: string, value: number, red: number, green: number, blue: number, picket: string, bigPicket?: boolean}) {
  return (
    <div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
      <div style={{display: 'flex', position: 'relative', alignItems: 'flex-end'}}>
        <div style={{position: 'absolute', left: value < 50 ? `${value}%` : 'auto', right: value >= 50 ? `${100 - value}%` : 'auto'}}>
          <div style={{borderRadius: value < 50 ? '1px 1px 1px 0' : '1px 1px 0 1px', textAlign: 'center', display: 'flex', width: 'fit-content',fontSize: 10, background: 'rgb(49,160,248)', color: '#FFF', padding: bigPicket ? '10px' : '2px 8px'}}><span>{picket}</span></div>
          {value < 50 ?
          <div style={{height: 3, width: 3, borderTop: '3px solid rgb(49,160,248)',borderBottom: '3px solid transparent',borderLeft: '2px solid rgb(49,160,248)',borderRight: '2px solid transparent'}}/>
          :
          <div style={{display: 'flex', justifyContent: 'right', width: '100%'}}>
            <div style={{height: 3, width: 3, borderTop: '3px solid rgb(49,160,248)',borderBottom: '3px solid transparent',borderLeft: '2px solid transparent',borderRight: '2px solid rgb(49,160,248)'}}/>
          </div>
          }
        </div>
      </div>
      <div style={{width: '100%'}}>
        <ProgressBar text={text} value={value} red={red} green={green} blue={blue}/>
      </div>
    </div>
  )
}