import GradationBox from "../common/GradationBox";
import close from '@/public/assets/icons/cxray/close_01.png';

export default function CCEModal({datas, selectedIndex, setSelectedIndex, maxLength}: {datas: CCEResult[], selectedIndex: number, setSelectedIndex: Function, maxLength: number}) {
  const selectedData = selectedIndex > -1 ? datas.filter((_: CCEResult, index: number) => index === selectedIndex)[0] : null;
  return (
    <div className={`detail-modal ${selectedData ? 'active' : ''}`}>
      <GradationBox
      content={
        <div style={{padding: '30px 20px'}}>
          <button style={{position: 'absolute', top: 10, right: 10}}><img src={close.src} style={{width:15}} onClick={() => setSelectedIndex(-1)}/></button>
          <div style={{width: '100%', display: 'flex', height: 30, padding: '5px 0', justifyContent: 'space-between', color: '#EEE'}}>
            <span>CCE 취약점</span>
            <div>
              <button style={{color: '#EEE'}} onClick={() => setSelectedIndex(selectedIndex - 1)} disabled={selectedIndex === 0}>Prev</button>
              <button style={{color: '#EEE', marginLeft: '10px'}} onClick={() => setSelectedIndex(selectedIndex + 1)} disabled={selectedIndex === maxLength}>Next</button>
            </div>
          </div>
          <table className="cxray-horiziontal-table">
            <tbody>
              <tr>
                <th style={{width: '150px'}}>CCE Code</th>
                <td>{selectedData ? selectedData.cceCode : ''}</td>
              </tr>
              <tr>
                <th>위험도</th>
                <td>{selectedData ? selectedData.severity : ''}</td>
              </tr>
              <tr>
                <th>진단 항목</th>
                <td><div className="cxray-horiziontal-table-longcontent slight-scroll">{selectedData ? selectedData.description : ''}</div></td>
              </tr>
              <tr>
                <th>해결책</th>
                <td><div className="cxray-horiziontal-table-longcontent slight-scroll">{selectedData ? selectedData.solution : ''}</div></td>
              </tr>
            </tbody>
          </table>
        </div>
      }
      />
      <style jsx>{`
         .detail-modal {
          position: fixed;
          transform: translateY(-50%);
          right: -800px;
          top: 50%;
          height: auto;
          transition: all 0.5s ease;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.2);
          width: 600px;
          overflow: visible;
        }
        .detail-modal.active {
          right: 30px;
        }
      `}</style>
    </div>
  )
}