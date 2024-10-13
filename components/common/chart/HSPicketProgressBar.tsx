import HSProgressBar from "./HSProgressBar";

export default function HSPicketProgressBar({text, value, red, green, blue, picket, bigPicket}: 
  {text: string, value: number, red: number, green: number, blue: number, picket: string, bigPicket?: boolean}) {
  return (
    <div style={{display: 'grid', gridTemplateRows: `${bigPicket ? 32 : 25}px 1fr`, height: '100%'}}>
      <div style={{display: 'flex', position: 'relative', alignItems: 'flex-end'}}>
        <div style={{position: 'absolute', left: value < 50 ? `${value}%` : 'auto', right: value >= 50 ? `${100 - value}%` : 'auto'}}>
          <div style={{borderRadius: value < 50 ? '1px 1px 1px 0' : '1px 1px 0 1px', textAlign: 'center', display: 'flex', width: 'fit-content',fontSize: 10, background: `rgb(${red},${green},${blue})`, color: '#FFF', padding: bigPicket ? '4px 12px' : '2px 8px', marginBottom: 2}}><span>{picket}</span></div>
          {/*value < 50 ?
          <div style={{height: 2, width: 2, borderTop: `2px solid rgb(${red},${green},${blue})`,borderBottom: '2px solid transparent',borderLeft: `2px solid rgb(${red},${green},${blue})`,borderRight: '2px solid transparent'}}/>
          :
          <div style={{display: 'flex', justifyContent: 'right', width: '100%'}}>
            <div style={{height: 2, width: 2, borderTop: `2px solid rgb(${red},${green},${blue})`, borderBottom: '2px solid transparent',borderLeft: '2px solid transparent',borderRight: `2px solid rgb(${red},${green},${blue})`}}/>
          </div>
          **/}
        </div>
      </div>
      <div style={{width: '100%'}}>
        <HSProgressBar text={text} value={value} red={red} green={green} blue={blue}/>
      </div>
    </div>
  )
}