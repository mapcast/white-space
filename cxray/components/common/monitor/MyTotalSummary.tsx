import CircleKeyValue from "../data/CircleKeyValue";

export default function MyTotalSummary({status}: {status: MyStatus}) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
      <div style={{display: 'grid', gridTemplateRows: '5fr 3fr', width: '90%', height: '100%'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div style={{height: '90%', aspectRatio: '1 / 1', borderRadius: '50%', border: '5px solid rgb(49,160,248)'}} className="element-to-center">
            <div style={{textAlign: 'center'}}>
              <h1 className="blue">{status.imageCount}</h1>
              <span className="blue" style={{fontSize: '9px'}}>Total analysis container</span>
            </div>
          </div>
        </div>
        <div style={{padding: '5px 20px 15px 20px'}}>
          <div style={{borderRadius: '5px', background: 'rgb(47,61,92)', width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            <div style={{padding: '10px 0'}}>
              <div style={{borderRight: '1px solid rgb(49,160,248)', width: '100%', height: '100%'}}>
                <CircleKeyValue name={'CCE Total'} value={status.cceTotal} circleSize={45} keyFontSize={10} valueFontSize={11}/>
              </div>
            </div>
            <div style={{padding: '10px 0'}}>
              <div style={{borderRight: '1px solid rgb(49,160,248)', width: '100%', height: '100%'}}>
                <CircleKeyValue name={'CVE Total'} value={status.cveTotal} circleSize={45} keyFontSize={10} valueFontSize={11}/>
              </div>
            </div>
            <div style={{padding: '10px 0'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <CircleKeyValue name={'Antivirus Total'} value={status.avTotal} circleSize={45} keyFontSize={10} valueFontSize={11}/>
              </div>
            </div> 
          </div>
        </div>
      </div>
      <style jsx>{`
        span {
          cursor: default;
        }
      `}</style>
    </div>
  );
} 