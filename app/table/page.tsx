'use client'
import HSTable from "@/components/common/HSTable";

export default function TableTest() {
  return (
    <div style={{padding: 20}}>
      <HSTable
      headers={[
        {
          id: 0,
          raw: 'babvo',
          search: true,
          display: 'deenm',
        },
        {
          id: 0,
          raw: 'BASDsd',
          search: true,
          display: 'zzzz',
        }
      ]}
      values={[
        /*
        {
          id: 0,
          values: [
            {
              id: 0,
              display: 'daenty',
              raw: 1
            },
            {
              id: 0,
              display: 'sib',
              raw: 2
            }
          ]
        }*/
      ]}/>
    </div>
  )
}