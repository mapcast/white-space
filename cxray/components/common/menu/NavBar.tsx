import SelectableButton from "@/components/common/SelectableButton";
import SimpleButton from "@/components/common/SimpleButton";
import whitelogo from "@/public/assets/logos/logo_cxray_white.png";
import { useRouter } from 'next/router';
import totop from '@/public/assets/icons/cxray/totop.png';
import tobottom from '@/public/assets/icons/cxray/tobottom.png';
import userDefaultImage from '@/public/assets/images/user_default.png';
import { CSSProperties } from "react";

export default function NavBar({width, minWidth, topContent, backgroundImage, bgStyle, menus, selectedMenu, setSelectedMenu, userInfo}: 
  {width: any, minWidth: number, topContent?: any, backgroundImage?: string, bgStyle?: CSSProperties, menus?: Field[], selectedMenu?: string, setSelectedMenu?: Function, userInfo?: UserInfo|null}) {
  const router = useRouter();

  return (
    <nav style={{width, minWidth}}>
      <div style={{position: 'relative', display: 'grid', gridTemplateRows: '65px 1fr'}}>
        <div style={{padding: '0 20px'}}>
          <div style={{borderBottom: '1px solid white', padding: '10px 5px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{alignItems: 'center', height: '100%', display: 'flex', fontSize: '28px', color: 'white'}}>
              <button onClick={() => router.push("/upload")}><img src={whitelogo.src} style={{height: '28px'}}/></button>
            </div>
            <div style={{alignItems: 'center', height: '100%', display: 'flex'}} className="blue">
              {userInfo ?
              <div style={{display: 'flex', alignItems: 'center', height: '28px', cursor: 'pointer'}} onClick={() => router.push("/mypage")}>
                <span>{userInfo.name}</span>
                <img src={userInfo.image && userInfo.image != '' ? userInfo.image : userDefaultImage.src} style={{height: '100%', aspectRatio: '1/1', marginLeft: '5px', borderRadius: '50%'}}/>
              </div> :
              <div style={{padding: '2px 0', height: '100%', display: 'flex', gap: '10px'}}>
                <SimpleButton
                color="rgb(49,160,248)"
                width="100px"
                fontSize={12}
                height={24}
                text="Sign in"
                onClick={() => router.push("/auth/login")}/>
                <SimpleButton 
                color="rgb(49,160,248)"
                width="100px"
                fontSize={12}
                height={24}
                text="Sign up"
                onClick={() => router.push("/auth/join")}/>
              </div>}
            </div>
          </div>
        </div>
        {topContent ? topContent : <></>}
        <div className="border-line"/>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 104px'}}>
        <div/>
        <div style={{position: 'relative'}}>
          <div className="daegak-border"/>
          <div className="fill-line">
            <div className="border-line"/>
          </div>
        </div>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 94.5px'}}>
        <div style={{position: 'relative'}}>
          {backgroundImage ? <img src={backgroundImage} style={bgStyle ? bgStyle : {position: 'absolute', width: '80%', left: '10%', bottom: 10}}/> : <></>}
          <div style={{padding: '10px 30px', zIndex: 1, position: 'relative'}}>
            {menus && setSelectedMenu ? menus.map((menu: Field, index: number) => 
            <div key={menu.raw_name} style={{paddingTop: index == 0 ? 20: 50, display: 'flex', justifyContent: 'center'}}>
              <div style={{width: '100%', maxWidth: '300px'}}>
                <SelectableButton width='100%' text={menu.display_name} selected={menu.raw_name === selectedMenu} onClick={() => setSelectedMenu(menu.raw_name)} height={30} fontSize={16}/>
              </div>
            </div>) : <></>}
          </div>
          <div style={{top:0, left:0, position:'absolute', width:'100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 0}}>
          </div>
          <div className="border-line"/>
        </div>
        <div style={{display: 'grid', gridTemplateRows: '1fr 1fr 4fr'}}>
          
          <div className="element-to-center">
            <div>
              <button style={{width: 40, height: 40}}><img src={totop.src} style={{width: '100%', height: '100%'}}/></button>
            </div>
          </div>
          <div className="element-to-center">
            <div>
              <button style={{width: 40, height: 40}}><img src={tobottom.src} style={{width: '100%', height: '100%'}}/></button>
            </div>
          </div>
          <div/>
        </div>
      </div>
      <style jsx>{`
        nav {
          display: grid;
          grid-template-rows: 4fr 100px 5fr;
          height: 100%;
        }
        .daegak-border {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: linear-gradient(135deg, transparent 65px, rgba(255,255,255,0.3) 71px, rgba(255,255,255,0.3) 74px, transparent 74px);
        }
        .fill-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 10px;
          height: 10px;
          z-index: 3;
          background: #151446;
        }
        .border-line {
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 100%;
          z-index: 2;
          background: linear-gradient(90deg, transparent 0px, rgba(217,217,217,0.3) 7px, rgba(217,217,217,0.55) 10px, transparent 10px);
        }
      `}</style>
    </nav>
  );
}