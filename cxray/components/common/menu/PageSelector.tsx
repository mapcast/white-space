import { useRouter } from 'next/router';
import { useState } from 'react';

function PageSelectorMenu({page, router}: {page: Field, router: any}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div 
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onClick={() => router.push(page.raw_name)}
    style={{width: 'auto', height: '100%', padding: '0 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
      <span style={{color: router.asPath.startsWith(page.raw_name) || hovered ? 'rgb(49,160,248)' : 'white'}}>{page.display_name}</span>
    </div>
  )
}

export default function PageSelector({pages}: {pages: Field[]}) {
  const router = useRouter();
  return (
    <div style={{width: '100%', padding: '0 20px', paddingTop: 0}}>
      <div style={{paddingBottom: '12px', borderBottom: '1px solid white', display: 'flex'}}>
        {pages.map((page: Field) => <PageSelectorMenu key={page.raw_name} page={page} router={router}/>)}
      </div>
    </div>
  )
}