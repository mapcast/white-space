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
    <ul className="hs-pagination">
        <li><button disabled={page <= 1} onClick={() => setPage(1)}><DoubleArrow rotate={270}/></button></li>
        <li><button disabled={page <= 1} onClick={() => setPage(page - 1)}><SimpleArrow rotate={180}/></button></li>
        {/*<span style={{fontWeight: '800', fontSize: '13px'}} className="blue">{`${page + 1} (1~${maxPage})`}</span>*/}
        {pageList.map((pg: number) => 
          <li key={pg} className={page === pg ? "active" : ""}><button style={{width: 26, height: 26}} onClick={() => setPage(pg)}>{pg}</button></li>
        )}
        <li><button disabled={page + 1 > maxPage} onClick={() => setPage(page + 1)}><SimpleArrow rotate={0}/></button></li>
        <li><button disabled={page + 1 > maxPage} onClick={() => setPage(maxPage)}><DoubleArrow rotate={90}/></button></li>
      <style jsx>{`
        .hs-pagination {
          display: flex;
          gap: 5px;
          padding: 5px 0;
        }
        li {
          list-style: none;
          border-radius: 10px;
          width: 30px;
          height: 30px;
          transition: all 0.7s ease;
        }
        li:hover, li.active {
          background: rgba(0, 0, 0, 0.2);
        }
        button {
          padding: 0;
          width: 100% !important;
          height: 100% !important;
        }
      `}</style>
    </ul>
  )
} 