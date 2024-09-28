
import GradationBox from "@/components/common/GradationBox";
import close from '@/public/assets/icons/cxray/close_01.png';

export default function AVModal({datas, selectedIndex, setSelectedIndex, maxLength}: {datas: FileResult[], selectedIndex: number, setSelectedIndex: Function, maxLength: number}) {
  const selectedData = selectedIndex > -1 ? datas.filter((_: FileResult, index: number) => index === selectedIndex)[0] : null;
  return (
    <div className={`detail-modal ${selectedData ? 'active' : ''}`}>
      <GradationBox
      content={
        <div style={{padding: '30px 20px'}}>
          <button style={{position: 'absolute', top: 10, right: 10}}><img src={close.src} style={{width:15}} onClick={() => setSelectedIndex(-1)}/></button>
          <div style={{width: '100%', display: 'flex', height: 30, padding: '5px 0', justifyContent: 'space-between', color: '#EEE'}}>
            <span>Antivirus | File1</span>
            <div>
              <button style={{color: '#EEE'}} onClick={() => setSelectedIndex(selectedIndex - 1)} disabled={selectedIndex === 0}>Prev</button>
              <button style={{color: '#EEE', marginLeft: '10px'}} onClick={() => setSelectedIndex(selectedIndex + 1)} disabled={selectedIndex === maxLength}>Next</button>
            </div>
          </div>
          <table className="cxray-horiziontal-table">
            <thead>
              <tr>
                <th>Vendor</th>
                <th>검사 결과</th>
              </tr>
            </thead>
            <tbody>
              {selectedData ?
              <>
                {selectedData.avResults.map((result: AntivirusResult, index: number) =>
                <tr key={index}>
                  <td>{result.vendor}</td>
                  <td>{result.reason}</td>
                </tr>)}
                {selectedData.avResults.length === 0 ? <tr><td colSpan={2}><center>No Information</center></td></tr> : <></>}
              </>
              : <></>
              }
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