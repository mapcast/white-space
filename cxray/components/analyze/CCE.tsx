import { getImageCCEDatasApi } from "@/services/image";
import CxrayTableWithModal from "../common/table/CxrayTableWithModal";
import { getMyImageCCEDatasApi } from "@/services/my";

export default function CCE({imageId}: {imageId?: string}) {
  const additional: Map<String, String> = new Map();
  if(imageId) additional.set('imageId', imageId);
  return (
    <>
      <CxrayTableWithModal
      getDatasApi={imageId ? getImageCCEDatasApi : getMyImageCCEDatasApi}
      headers={imageId ? [
        {display: 'CCE CODE', raw: 'cceCode', type: 'string', width: 150},
        {display: '진단 항목', raw: 'description', type: 'string'},
        {display: '위험도', raw: 'severity', type: 'severity', width: 150},
        {display: 'Detection', raw: 'isViolated', type: 'detection', width: 150},
      ] : [
        {display: '분석 일시', raw: 'createdTimeAt', type: 'time', width: 150, join: 'image'},
        {display: '이미지 이름', raw: 'imageName', type: 'string', width: 150, join: 'image'},
        {display: 'Tag', raw: 'tag', type: 'string', width: 150, join: 'image'},
        {display: 'CCE CODE', raw: 'cceCode', type: 'string', width: 150},
        {display: '진단 항목', raw: 'description', type: 'string'},
        {display: '위험도', raw: 'severity', type: 'severity', width: 150},
        {display: 'Detection', raw: 'isViolated', type: 'detection', width: 150},
      ]}
      searchItems={
        imageId ? 
        [
          {display: 'CCE Code', value: 'cceCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: '진단 항목', value: 'description', category: 'text'},
        ] : 
        [
          {display: '이미지 이름', value: 'imageName', category: 'text'},
          {display: 'Tag', value: 'tag', category: 'text'},
          {display: 'CCE Code', value: 'cceCode', category: 'text'},
          {display: '위험도', value: 'severity', category: 'select', selectItems: [
            {display: 'INFO', value: 'info'},
            {display: 'LOW', value: 'low'},
            {display: 'MEDIUM', value: 'medium'},
            {display: 'HIGH', value: 'high'},
            {display: 'CRITICAL', value: 'critical'},
          ]},
          {display: '진단 항목', value: 'description', category: 'text'},
        ]
      }
      additionalCondition={additional}
      modal={'cce'}
      />
    </>
  )
}