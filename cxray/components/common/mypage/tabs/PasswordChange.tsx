import NowLoading from '@/components/loading/NowLoading';
import { useState } from 'react';
import SimpleLink from '../../SimpleLink';
import whitelogo from '@/public/assets/logos/logo_cxray_white.png';

import BigInput from '../../input/BigInput';
import { updateMyPasswordApi } from '@/services/user';

export default function PasswordChange() {
  const [loading, setLoading] = useState(false);
  const [updateParams, setUpdateParams] = useState<PasswordDto>({oldPassword: '', newPassword: '', repeat: ''});
  function updateParam(field: string, value: string) {
    setUpdateParams({...updateParams, [field]: value});
  }

  async function update() {
    if(updateParams.newPassword.trim() === '' || updateParams.oldPassword.trim() === '') {
      alert("필수 항목을 입력해야 합니다.")
    } else {
      setLoading(true);
      const response = await updateMyPasswordApi(updateParams);
      if(response != null) {
        if(response.code === 200) {
          alert("패스워드 변경이 완료되었습니다.")
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
          <span style={{color: '#FFF', marginLeft: 10, fontSize: 30, paddingTop: 10}}>패스워드 변경</span>
        </div>
        <BigInput
        type="password"
        fieldName="Old Password"
        fieldValue={updateParams.oldPassword}
        setFieldValue={(val: string) => {updateParam('oldPassword', val)}}/>
        <BigInput
        type="password"
        fieldName="New Password"
        fieldValue={updateParams.newPassword}
        setFieldValue={(val: string) => {updateParam('newPassword', val)}}/>
        <BigInput
        type="password"
        fieldName="New Password Repeat"
        fieldValue={updateParams.repeat}
        setFieldValue={(val: string) => {updateParam('repeat', val)}}/>
        <div style={{padding: '10px 0', fontSize: 11, display: 'flex', justifyContent: 'right'}}>
          <SimpleLink onClick={update} text="Modify"/>
        </div>
      </div>}
    </div>
  );
}

