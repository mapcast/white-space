import { useEffect, useState } from 'react'; 
import DoubleArrow from './item/DoubleArrow';
import SimpleArrow from './item/SimpleArrow';

export default function HSPagination({page, maxPage, setPage, search, dark}: 
  {page: number, maxPage: number, setPage: (pg: number) => void, search: Function, dark?: boolean}) {
  const [pageList, setPageList] = useState<number[]>([]);
  useEffect(() => {
    if (maxPage >= 5) {
      let firstPage = 0;
      if (page < 3) firstPage = 1;
      else if (page > maxPage - 3) firstPage = maxPage - 4;
      else firstPage = page - 2;
      setPageList(Array(5).fill(firstPage).map((n, i) => n + i));
    }
    else setPageList(Array(maxPage).fill(1).map((n, i) => n + i));
  }, [page, maxPage]);
  useEffect(() => {search()}, [page]);
  return (
    <div className="pagination-wrap" style={{
      background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    }}>
      <div className="pagination" style={{
        background: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      }}>
        <button style={{padding: '1px'}} disabled={page <= 1} onClick={() => setPage(1)}><DoubleArrow rotate={270}/></button>
        <button style={{padding: '1px'}} disabled={page <= 1} onClick={() => setPage(page - 1)}><SimpleArrow rotate={180}/></button>
        {/*<span style={{fontWeight: '800', fontSize: '13px'}} className="blue">{`${page + 1} (1~${maxPage})`}</span>*/}
        {pageList.map((pg: number) => 
          <button key={pg} style={{width: 26, height: 26}} className={page === pg ? "active" : ""} onClick={() => setPage(pg)}>{pg}</button>
        )}
        <button style={{padding: '1px'}} disabled={page + 1 > maxPage} onClick={() => setPage(page + 1)}><SimpleArrow rotate={0}/></button>
        <button style={{padding: '1px'}} disabled={page + 1 > maxPage} onClick={() => setPage(maxPage)}><DoubleArrow rotate={90}/></button>
      </div>
      <style jsx>{`
        .pagination-wrap {
          width: 100%;
          padding: 5px 0 6px 0;
        }
        .pagination {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        button {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.7s;
          border-radius: 2px;
        }
        button:hover, button.active {
          background: rgba(255, 255, 255, 0.5);
        }
        span {
          cursor: default;
        }
      `}</style>
    </div>
  )
} 