import mypage from '@/public/assets/icons/cxray/mypage_01.png';
import history from '@/public/assets/icons/cxray/analysishistory_01.png';
import community from '@/public/assets/icons/cxray/community_01.png';

import lankr from '@/public/assets/icons/cxray/langkr_01.png';
import lanen from '@/public/assets/icons/cxray/langen_01.png';

import logout from '@/public/assets/icons/cxray/logout_01.png';
import menu from '@/public/assets/icons/cxray/menu_01.png';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function TopMenuBar({locale, userInfo}: {locale?: string, userInfo?: any|null}) {
  const router = useRouter();
  const {i18n} = useTranslation();
  const [languageSelectorOpened, setLanguageSelectorOpened] = useState(false);

  const handleLocaleChange = (locale: any) => {
    i18n.changeLanguage(locale);
    router.push(router.asPath, router.asPath, { locale });
    setLanguageSelectorOpened(false);
  };

  return (
    <div style={{padding: '15px 20px'}}>
      <div style={{borderRadius: '3px', background: 'rgba(255,255,255,0.1)', width: '100%', height: '100%', padding: '5px 20px', display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', justifyContent: 'right', gap: '10px'}}>
          {userInfo ? 
          <>
            <button onClick={() => router.push("/my/history")}>
              <img style={{width: '20px'}} src={history.src}/>
            </button>
            <button onClick={() => {alert('해당 기능은 준비 중입니다.')}}>
              <img style={{width: '20px'}} src={community.src}/>
            </button>
          </>
          : <></>}
        </div>
        <div style={{display: 'flex', justifyContent: 'right', gap: '10px'}}>
          {userInfo ? 
          <button onClick={() => router.push('/auth/logout')}>
            <img src={logout.src}/>
          </button>
          : <></>}
          <div>
            <button onClick={() => setLanguageSelectorOpened(!languageSelectorOpened)}>
              <img src={locale === 'ko' ? lankr.src : lanen.src}/>
            </button>
            {languageSelectorOpened ? 
            <div style={{position: 'absolute', display: 'block', zIndex: '2', padding: '10px 5px 20px 5px',
            background: 'rgba(255,255,255,0.1)', width: '50px', marginLeft: -18, marginTop: 8}}>
              <button className="language-selector" onClick={() => handleLocaleChange('ko')}>
                <span>KR</span>
              </button>
              <button className="language-selector" onClick={() => handleLocaleChange('en')}>
                <span>EN</span>
              </button>
            </div> : <></>}
            
          </div>
          <button>
            <img src={menu.src}/>
          </button>
        </div>
        <style jsx>{`
          div {
            border-radius: 3px;
          }
          button {
            width: 20px;
            height: 25px;
            display: flex;
            align-items: center;
            justify-contents; center;
          }
          .language-selector {
            width: 100%;
            padding: 10px 0;
            border-bottom: 1px solid #FFF;
          }
          .language-selector > span {
            width: 100%;
            text-align: center;
            color: #FFF;
          }
          .language-selector:hover {
            background: rgba(255,255,255,0.2);
          }
          img {
            width: 15px;
          }
        `}</style>
      </div>
    </div>
  )
}