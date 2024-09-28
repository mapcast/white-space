import { useEffect } from 'react'; 
import pprev from '@/public/assets/icons/cxray/pprev.png';
import prev from '@/public/assets/icons/cxray/prev.png';
import next from '@/public/assets/icons/cxray/next.png';
import nextt from '@/public/assets/icons/cxray/nextt.png';

export default function Pagination({page, maxPage, setPage, search}: {page: number, maxPage: number, setPage: Function, search: Function}) {
  useEffect(() => {search()}, [page]);
  return (
    <div>
      <button disabled={page + 1 <= 1} onClick={() => setPage(0)}><img src={pprev.src}/></button>
      <button disabled={page + 1 <= 1} onClick={() => setPage(page - 1)}><img src={prev.src}/></button>
      <span style={{fontWeight: '800', fontSize: '13px'}} className="blue">{`${page + 1} (1~${maxPage})`}</span>
      <button disabled={page + 1 >= maxPage} onClick={() => setPage(page + 1)}><img src={next.src}/></button>
      <button disabled={page + 1 >= maxPage} onClick={() => setPage(maxPage - 1)}><img src={nextt.src}/></button>
      <style jsx>{`
        div {
          display: flex;
          justify-content: right;
          width: 100%;
          padding: 10px 0;
        }
        button {
          margin-right: 8px;
          color: #FFF;
          width: 12px;
          height: 12px;
        }
        span {
          margin-right: 7px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
} 