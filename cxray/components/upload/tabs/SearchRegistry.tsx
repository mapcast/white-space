import { useRef, useState } from "react";

import container from '@/public/assets/images/container_01.png';
import whitelogo from '@/public/assets/logos/logo_cxray_white.png';
import SimpleButton from '@/components/common/SimpleButton';
import BigInput from "@/components/common/input/BigInput";
import { checkImageFileSystemApi } from "@/services/image";
import NowLoading from "@/components/loading/NowLoading";

export default function SearchRegistry({router}: any) {

  const [dto, setDto] = useState<SearchRegistryDto>({
    repo: '',
    image: '',
    tag: ''
  });
  const [loading, setLoading] = useState(false);

  function onChangeField(field: string, value: string) {
    setDto({...dto, [field]: value});
  }

  async function checkImageFileSystem() {
    setLoading(true);
    const response = await checkImageFileSystemApi(dto);
    if(response != null) {
      if(response.code === 200) {
        router.push(`/analyze/${response.data}`);
      } else {
        alert(`이미지 분석 도중 에러가 발생했습니다. ${response.message}`);
        setLoading(false);
      }
    } else {
      alert("이미지 분석 도중 에러가 발생했습니다.");
      setLoading(false);
    }
  }

  return (
    <div style={{height: '100%'}}>
      <div className="title-wrap">
        <img src={whitelogo.src} style={{height: '100px'}}/>
        <p className="title-subtitle">Container analyzer of Seekers</p>
      </div>
      <div style={{width: '100%', height: '30vh', minHeight: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {loading ?
        <NowLoading/>
        :
        <div>
          <BigInput
          reduceBottomPadding={true}
          fieldName="Registry URL"
          fieldValue={dto.repo}
          setFieldValue={(val: string) => {onChangeField('repo', val)}}/>
          <BigInput
          reduceBottomPadding={true}
          fieldName="Image Name"
          fieldValue={dto.image}
          setFieldValue={(val: string) => {onChangeField('image', val)}}/>
          <BigInput
          reduceBottomPadding={true}
          fieldName="Tag"
          fieldValue={dto.tag}
          setFieldValue={(val: string) => {onChangeField('tag', val)}}/>
        </div>
        }
      </div>
      <div style={{width: '100%', height: 100, display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
        <SimpleButton width={200} color="#FFF" onClick={checkImageFileSystem} text={loading ? 'Analyzing...' : 'Start Analysis'} square={true} disabled={loading}/>
      </div>
      <div style={{width: '100%', height: 'auto', textAlign: 'center', padding: '20px 0', fontSize: '20px', color: '#BBB'}}>
        <p>분석 실행을 수행한 Container에 대하여 당사는 책임지지 않습니다.</p>
        <p style={{marginTop: '20px'}}>또한 각종 중요 정보 또는 개인정보가 포함되어 있는 Container대한 분석 실행을 수행하지 아니할 것을 권고 합니다.</p>
      </div>
    </div>
  );
}