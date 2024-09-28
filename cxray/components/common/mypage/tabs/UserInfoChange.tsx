import NowLoading from '@/components/loading/NowLoading';
import { useState } from 'react';
import SimpleLink from '../../SimpleLink';
import whitelogo from '@/public/assets/logos/logo_cxray_white.png';
import BigInput from '../../input/BigInput';
import { updateMyInfoApi } from '@/services/user';

export default function UserInfoChange({userInfo}: {userInfo: UserInfo}) {
  console.log(userInfo)
  const [loading, setLoading] = useState(false);
  const [updateParams, setUpdateParams] = useState<UserInfo>(userInfo);

  function updateParam(field: string, value: string) {
    setUpdateParams({...updateParams, [field]: value});
  }

  async function update() {
    if(updateParams.firstName.trim() === '' || updateParams.lastName.trim() === '' || updateParams.userEmail.trim() === '') {
      alert("필수 항목을 입력해야 합니다.")
    } else {
      setLoading(true);
      const response = await updateMyInfoApi(updateParams);
      if(response != null) {
        if(response.code === 200) {
          alert("회원정보 변경이 완료되었습니다.")
        } else if(response.code === 602) {
          alert("중복된 Email입니다.");
        } else {
          alert(response.message);
        }
      } else {
        alert("요청 도중 에러가 발생했습니다.");
      }
      setLoading(false);
    }
  }

  return (
    <div style={{width: '100%', display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', gridRow: 'span 3'}}>
      {loading ? <NowLoading/>
      :
      <div style={{paddingBottom: 50}}>
        <div style={{width: '100%', height: 100}} className="element-to-center">
          <img src={whitelogo.src} style={{height: 50}}/>
          <span style={{color: '#FFF', marginLeft: 10, fontSize: 30, paddingTop: 10}}>회원정보 변경</span>
        </div>
        <BigInput
        fieldName="First Name"
        fieldValue={updateParams.firstName}
        setFieldValue={(val: string) => {updateParam('firstName', val)}}/>
        <BigInput
        fieldName="Last Name"
        fieldValue={updateParams.lastName}
        setFieldValue={(val: string) => {updateParam('lastName', val)}}/>
        <BigInput
        disabled
        fieldName="Email"
        fieldValue={updateParams.userEmail}
        setFieldValue={(val: string) => {updateParam('userEmail', val)}}/>
        <div style={{borderBottom: '1px solid white', display: 'flex', flexWrap: 'wrap', width: '400px'}}>
          <h5 style={{padding: '20px 0', color: '#FFF', width: '100%', fontSize: '12px'}}>관심 주제</h5>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>SW 개발</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>SW 보안</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>HW 개발</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>HW 보안</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>Network 보안</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
          <div style={{height: 40, width: '50%'}}>
            <label style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
              <span style={{color: '#BBB', marginLeft: '3px', fontSize: 14}}>솔루션 기획</span>
              <input checked={false} type="checkbox" style={{transform: 'translateY(2.5px)'}} onChange={() => {}}/>
            </label>
          </div>
        </div>
        <div style={{padding: '10px 0', fontSize: 11, display: 'flex', justifyContent: 'right'}}>
          <SimpleLink onClick={update} text="Modify"/>
        </div>
      </div>}
    </div>
  );
}

