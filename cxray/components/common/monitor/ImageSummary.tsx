import DonutWithInfo from "@/components/chart/DonutWithInfo";
import KeyValueCenter from "../KeyValueCenter";
import NowLoading from "@/components/loading/NowLoading";

export default function ImageSummary({image}: {image: ContainerImage | null}) {
  const labels = ['CCE','CVE','AV'];
  const colors = ['rgb(112,173,71)','rgb(49,160,248)','rgb(178,52,62)'];
  return (
    image == null ? 
    <div style={{width: '100%', height: '100%', color: '#FFF'}} className="element-to-center"> 
      No Information
    </div> :
    image.nowAnalyzing ?
    <div style={{width: '100%', height: '100%'}}>
      <NowLoading/>
    </div>
    :
    <div style={{width: '100%', height: '100%', padding: '20px', display: 'grid', gridTemplateRows: '50px 1fr', gridTemplateColumns: '180px 1fr'}}>
      <div style={{gridColumn: 'span 2', textAlign: 'center', color: '#FFF', fontSize: '14px'}}>{`Analysis Date : ${image.createdTimeAt.replace("T", " ").substring(0, 19)}`}</div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <DonutWithInfo labels={labels} colors={colors} data={[image.cceCount, image.cveCount, image.avCount]}/>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: '100%', maxWidth: '400px'}}>
          <KeyValueCenter name="이름" value={image.imageName}/>
          <KeyValueCenter name="태그" value={image.tag}/>
          <KeyValueCenter name="용량" value={`${(image.fileLength / 1000000).toFixed(2)}MB`}/>
          <KeyValueCenter name="파일 수" value={image.fileCount}/>
        </div>
      </div>
    </div>
  );
}