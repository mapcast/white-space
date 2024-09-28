import { useRef, useState } from "react";

import container from '@/public/assets/images/container_01.png';
import whitelogo from '@/public/assets/logos/logo_cxray_white.png';
import SimpleButton from '@/components/common/SimpleButton';
import NowLoading from "@/components/loading/NowLoading";

export default function FileUpload({router}: any) {
  const hiddenFileInput = useRef<HTMLInputElement|null>(null);

  const [upload, setUpload] = useState(0);
  const [file, setFile] = useState<File|null>(null);
 

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    setFile(selectedFile);
  };

  function handleSelectButtonClick() {
    if(hiddenFileInput.current != null) hiddenFileInput.current.click();
  };

  function sendFile() {
    if(file != null) {
      const formData = new FormData();
      formData.append('file', file);
  
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/image/check/multipart', true);
  
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUpload(percentComplete);
        }
      };
  
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if(response.data != null) {
            router.push(`/analyze/${response.data}`);
          } else {
            alert(`File upload failure: ${response.message}`);
            setUpload(0);
          }
        } else {
          alert('File upload failure');
          setUpload(0);
        }
      };
      xhr.send(formData);
    }
  }

  return (
    <div style={{height: '100%'}}>
      <div className="title-wrap">
        <img src={whitelogo.src} style={{height: '100px'}}/>
        <p className="title-subtitle">Container analyzer of Seekers</p>
      </div>
      <div style={{width: '100%', height: '30vh', minHeight: '150px', display: 'flex', justifyContent: 'center'}}>
        {upload === 100 ? <NowLoading/> :
        <div style={{width: '100%', height: 190, position: 'relative', display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
          <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '130px', textAlign: 'center', paddingTop: '100px'}}>
              <span style={{color: '#FFF', fontSize: '11px'}}>
                {upload === 100 ? 'Analyzing...' : 
                upload > 0 ? `Uploading ${upload}%` : 
                file != null ? file.name : ''}
              </span>
              {file != null ? <div style={{width: '100%', height: '5px', background: 'rgba(255,255,255,0.3)', marginTop: '5px'}}>
                <div style={{width: `${upload}%`, height: '100%', background: '#FFF', transition: 'all 0.3s ease'}}/>
              </div> : <></>}
            </div>
          </div>
          <img src={container.src} style={{width: 150, height: '100%', opacity: file != null ? 0.3 : 1}}/>
        </div>}
        
      </div>
      <div style={{width: '100%', height: 100, display: 'flex', justifyContent: 'center', padding: '20px 0'}}>
        {file == null ? 
        <SimpleButton width={200} color="#FFF" onClick={handleSelectButtonClick} text="Choose Container" square={true}/>
        :
        <SimpleButton width={200} color="#FFF" onClick={sendFile} 
        text={upload === 100 ? 'Analyzing...' : 'Start Analysis'} square={true} disabled={upload > 0}/>}
      </div>
      <div style={{width: '100%', height: 'auto', textAlign: 'center', padding: '20px 0', fontSize: '20px', color: '#BBB'}}>
        <p>분석 실행을 수행한 Container에 대하여 당사는 책임지지 않습니다.</p>
        <p style={{marginTop: '20px'}}>또한 각종 중요 정보 또는 개인정보가 포함되어 있는 Container대한 분석 실행을 수행하지 아니할 것을 권고 합니다.</p>
      </div>
      <input type="file" style={{display:'none'}} ref={hiddenFileInput} onChange={handleFileChange}/>
    </div>
  );
}