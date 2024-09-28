import CxrayDonut from "@/components/chart/CxrayDonut";
import PicketProgressBar from "@/components/chart/PicketProgressBar";
import { getRatio } from "@/functions/formatter";
import userDefaultImage from '@/public/assets/images/user_default.png';
import { useState, useRef } from 'react';

export default function MainTab({status}: {status: MyStatus|null}) {
  const labels = ['left', 'used'];
  const colors = ['rgb(49,160,248)','#DDD'];
  
  return (
    <div style={{width: '100%', height: '100%', gridRow: 'span 3'}}>
      <h3 style={{paddingBottom: 10}}>회원 정보</h3>
      <h4>My Resource</h4>
      <div className="light-box vertical-margin vertical-pad" 
      style={{width: '100%', height: '150px', minWidth: '700px', display: 'grid', gridTemplateColumns: '1fr 2fr 2fr'}}>
        <div style={{width: '100%', height: 130}} className="element-to-center">
          <div style={{width: 130, height: 130}}>
            {status ?
            <CxrayDonut labels={labels} colors={colors} data={[status.expire ? status.expire : 30, 30 - (status.expire ? status.expire : 30)]}
            center={
              <div style={{textAlign: 'center'}}>
                <h2 style={{color: '#DDD', fontSize: '18px', fontWeight: 800}}>{`${status.expire ? status.expire : '-'} Days`}</h2>
                <div style={{color: '#DDD', fontSize: '11px', marginTop: 10}}>잔여일</div>
              </div>
            }/>
            : <></>}
          </div>
        </div>
        <div style={{display: 'grid', gridTemplateRows: '38px 1fr', padding: '0 10px'}}>
          <h4 className="blue">업로드 가능 회수</h4>
          {status ? 
          <PicketProgressBar 
          text={`${status.uploadCountLimit} 회`} 
          value={getRatio(status.uploadCount, status.uploadCountLimit)} 
          red={49} green={160} blue={248} 
          picket={`${status.uploadCount} 회`}
          bigPicket/>
          : <></>}
        </div>
        <div style={{display: 'grid', gridTemplateRows: '38px 1fr', padding: '0 10px'}}>
          <h4 className="blue">월 사용량</h4>
          {status ? 
          <PicketProgressBar 
          text={`${Math.round(status.limit / (1000000))} MB`} 
          value={getRatio(status.usage, status.limit)} 
          red={49} green={160} blue={248} 
          picket={`${Math.round(status.usage / (1000000))} MB`}
          bigPicket/>
          : <></>}
        </div>
      </div>
      <h4>Areas of Interest</h4>
      <div className="light-box vertical-margin" 
      style={{width: '100%', display: 'flex', gridTemplateColumns: '1fr 2fr 2fr', flexWrap: 'wrap', gap: 10, padding: '15px 20px'}}>
        <div style={{background: 'rgb(49, 160, 248)', color: '#EEE', borderRadius: 5, fontSize: 12, padding: '5px 10px'}}>
          SW 개발
        </div>
        <div style={{background: 'rgb(49, 160, 248)', color: '#EEE', borderRadius: 5, fontSize: 12, padding: '5px 10px'}}>
          HW 개발
        </div>
      </div>
      <h4>Follower</h4>
      <div className="vertical-margin" style={{display: 'flex', gap: 10, flexWrap: 'wrap', width: '100%'}}>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px', display: 'grid', gridTemplateColumns: '1fr 2fr 4fr', gridTemplateRows: '1fr 1fr', gap: 5}} className="light-box">
            <div style={{gridRow: 'span 2'}} className="element-to-center">
              <img src={userDefaultImage.src} style={{width: 40, height: 40}}/>
            </div>
            <div style={{gridRow: 'span 2', display: 'flex', alignItems: 'center'}} className="ellipse">
              <h5 style={{width: '100%'}} className="ellipse">Michael Kinane</h5>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-end'}} className="ellipse">
              <span style={{fontSize: 10, color: 'rgb(49, 160, 248)', width: '100%'}} className="ellipse">소프트웨어 개발 | SW 보안</span>
            </div>
            <div style={{display: 'flex', alignItems: 'flex-start'}} className="ellipse">
              <span style={{fontSize: 10, color: '#BBB', width: '100%'}} className="ellipse">Follower 20  |  Following 20  | My Posts 2</span>
            </div>
          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
      </div>
      <h4>Following</h4>
      <div className="vertical-margin" style={{display: 'flex', gap: 10, flexWrap: 'wrap', width: '100%'}}>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
        <div style={{flex: '0 0 calc(50% - 5px)'}}>
          <div style={{width: '100%', height: '80px'}} className="light-box">

          </div>
        </div>
      </div>
      <style jsx>{`
        * {
          color: #EEE;
        }
        h4 {
          padding: 10px 0;
        }
      `}</style>
    </div>
  );
}