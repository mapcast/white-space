import PageSelector from "@/components/common/menu/PageSelector";
import TopMenuBar from "./TopMenuBar";


export default function MainContent({content, pageSelector, locale, userInfo}: 
  {content: any, pageSelector?: Field[], locale?: string, userInfo?: any|null}) {
  return (
    <div className="slight-scroll" style={{flex: 1, height: '100%', display: 'grid', gridTemplateRows: pageSelector ? '65px 28px 1fr' : '65px 1fr', overflowY: 'auto', minWidth: '544px'}}>
      <TopMenuBar locale={locale} userInfo={userInfo}/>
      {pageSelector?
      <PageSelector pages={pageSelector}/> 
      : <></>}
      <div style={{height: '100%', padding: '0 20px', paddingTop: 10, display: 'grid', gridTemplateRows: '40px 54px 1fr'}}>
        {content}
      </div>
    </div>
  )
}