'use client'
import HSTableSet from "@/components/common/HSTableSet";
import Simple from "@/layouts/Simple";
import { getHorseDatas } from "@/service/data";

export default function BoardPage() {

  return (
    <Simple>
      <div style={{padding: '30px 50px', display: 'grid', gridTemplateRows: '58px 1fr 100px', gridTemplateColumns: '1fr 1fr'}}>
        <h1 style={{padding: '10px 0'}}>Just Board Page.</h1>
        <div/>
        <div style={{gridColumn: 'span 2'}}>
          <HSTableSet getDatasApi={async (keyword: Map<string, string>) => getHorseDatas(keyword)} headers={[
            {
              raw: 'birthday',
              search: false,
              display: '생년월일',
            },
            {
              raw: 'father',
              search: true,
              display: '부',
            },
            {
              raw: 'name',
              search: true,
              display: '이름',
            },
            {
              raw: 'jraPrice',
              search: true,
              display: '수득상금',
            },
          ]}/>
        </div>
        
      </div>
    </Simple>
  )
}