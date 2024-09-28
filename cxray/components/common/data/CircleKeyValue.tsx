export default function CircleKeyValue({name, value, circleSize, keyFontSize, valueFontSize}: 
  {name: string, value: string|number, circleSize: number, keyFontSize: number, valueFontSize: number}) {
  return (
    <div style={{ width: '100%', height: '100%'}} className="element-to-center">
      <div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div style={{height: circleSize, aspectRatio: '1 / 1', borderRadius: '50%', border: '3px solid rgb(49,160,248)'}} className="element-to-center">
            <span className="blue" style={{fontSize: valueFontSize}}>{value}</span>
          </div>
        </div>
        <span className="blue" style={{fontSize: keyFontSize}}>{name}</span>
      </div>
    </div>
  );
}