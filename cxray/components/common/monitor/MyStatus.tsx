import CxrayDonut from "@/components/chart/CxrayDonut";
import PicketProgressBar from "@/components/chart/PicketProgressBar";
import ProgressBar from "@/components/chart/ProgressBar";
import { getRatio } from "@/functions/formatter";
import CircleKeyValue from "../data/CircleKeyValue";

export default function MyStatus({status}: {status: MyStatus}) {
  const labels = ['left', 'used'];
  const colors = ['rgb(49,160,248)','#DDD'];
  return (
    <div className="element-to-center" style={{width: '100%', height: '100%'}}>
      <div style={{display: 'grid', gridTemplateRows: '5fr 4fr', gridTemplateColumns: '150px 1fr', width: '90%', height: '100%'}}>
        <div style={{width: '100%', height: '100%'}} className="element-to-center">
          <div style={{width: 120, height: 120}}>
            <CxrayDonut labels={labels} colors={colors} data={[status.expire ? status.expire : 30, 30 - (status.expire ? status.expire : 30)]}
            center={
              <div style={{textAlign: 'center'}}>
                <h2 style={{color: '#DDD', fontSize: '18px', fontWeight: 800}}>{`${status.expire ? status.expire : '-'} Days`}</h2>
                <div style={{color: '#DDD', fontSize: '11px', marginTop: 10}}>잔여일</div>
              </div>
            }/>
          </div>
        </div>
        <div className="blue" style={{display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 2fr', paddingBottom: '25px'}}>
          <div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <div/>
            <div style={{display: 'flex', alignItems: 'center'}} className="ellipse">
              <span style={{fontSize: '12px', fontWeight: 800}} className="ellipse">업로드 가능 횟수</span>
            </div>
          </div>
          <PicketProgressBar text={`${status.uploadCountLimit} 회`} value={getRatio(status.uploadCount, status.uploadCountLimit)} red={49} green={160} blue={248} picket={`${status.uploadCount} 회`}/>
          <div style={{display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <div/>
            <div style={{display: 'flex', alignItems: 'center'}} className="ellipse">
              <span style={{fontSize: '12px', fontWeight: 800}} className="ellipse">월 사용량</span>
            </div>
          </div>
          <PicketProgressBar text={`${Math.round(status.limit / (1000000))} MB`} value={getRatio(status.usage, status.limit)} red={49} green={160} blue={248} picket={`${Math.round(status.usage / (1000000))} MB`}/>
        </div>
        <div style={{padding: '5px 20px 15px 20px', gridColumn: 'span 2'}}>
          <div style={{borderRadius: '5px', background: 'rgb(47,61,92)', width: '100%', height: '100%', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr'}}>
            <div style={{padding: '10px 0'}} className="element-to-center">
              <div style={{textAlign: 'center'}}>
                <h2 className="blue" style={{fontWeight: 800, height: '45px', fontSize: '28px', padding: '8px 0'}}>{status.imageCount}</h2>
                <span className="blue" style={{fontSize: 11}}>Total Analysis Container</span>
              </div>
            </div>
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