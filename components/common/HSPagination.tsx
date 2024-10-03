import { useEffect } from 'react'; 

export default function HSPagination({page, maxPage, setPage, search}: {page: number, maxPage: number, setPage: Function, search: Function}) {
  useEffect(() => {search()}, [page]);
  return (
    <div>
      <button disabled={page + 1 <= 1} onClick={() => setPage(0)}>pprev</button>
      <button disabled={page + 1 <= 1} onClick={() => setPage(page - 1)}>prev</button>
      <span style={{fontWeight: '800', fontSize: '13px'}} className="blue">{`${page + 1} (1~${maxPage})`}</span>
      <button disabled={page + 1 >= maxPage} onClick={() => setPage(page + 1)}>next</button>
      <button disabled={page + 1 >= maxPage} onClick={() => setPage(maxPage - 1)}>nextt</button>
      <style jsx>{`
        div {
          display: flex;
          justify-content: right;
          align-items: center;
          width: 100%;
          padding: 10px 0;
        }
        button {
          margin-right: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        span {
          margin-right: 7px;
        }
      `}</style>
    </div>
  )
} 