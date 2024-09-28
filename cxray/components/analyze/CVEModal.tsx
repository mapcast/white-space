import close from '@/public/assets/icons/cxray/close_01.png';
import GradationBox from '../common/GradationBox';

export default function CVEModal({datas, selectedIndex, setSelectedIndex, maxLength}: {datas: CVEResult[], selectedIndex: number, setSelectedIndex: Function, maxLength: number}) {
  const selectedData = selectedIndex > -1 ? datas.filter((_: CVEResult, index: number) => index === selectedIndex)[0] : null;
  return (
    <div className={`detail-modal ${selectedData ? 'active' : ''}`}>
      <GradationBox
      content={
        <div style={{padding: '30px 20px'}}>
          <button style={{position: 'absolute', top: 10, right: 10}}><img src={close.src} style={{width:15}} onClick={() => setSelectedIndex(-1)}/></button>
          <div style={{width: '100%', display: 'flex', height: 30, padding: '5px 0', justifyContent: 'space-between', color: '#EEE'}}>
            <span>CVE 취약점</span>
            <div>
              <button style={{color: '#EEE'}} onClick={() => setSelectedIndex(selectedIndex - 1)} disabled={selectedIndex <= 0}>Prev</button>
              <button style={{color: '#EEE', marginLeft: '10px'}} onClick={() => setSelectedIndex(selectedIndex + 1)} disabled={selectedIndex >= maxLength}>Next</button>
            </div>
          </div>
          <table className="cxray-horiziontal-table">
            <tbody>
              <tr>
                <th style={{width: '150px'}}>CVE Code</th>
                <td>{selectedData?.cveCode}</td>
              </tr>
              <tr>
                <th>Vendor</th>
                <td>{selectedData?.vendor}</td>
              </tr>
              <tr>
                <th>Product</th>
                <td>{selectedData?.product}</td>
              </tr>
              <tr>
                <th>Version</th>
                <td>{selectedData?.version}</td>
              </tr>
              <tr>
                <th>Impact</th>
                <td>{selectedData?.impact}</td>
              </tr>
              <tr>
                <th>Exploit</th>
                <td>{selectedData?.exploit}</td>
              </tr>
              <tr>
                <th>Base</th>
                <td>{selectedData?.base}</td>
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