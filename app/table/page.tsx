'use client'
import HSTableSet from "@/components/common/HSTableSet";
import HSBigInput from "@/components/common/input/HSBigInput";
import HSCheckBox from "@/components/common/input/HSCheckBox";
import HSRadio from "@/components/common/input/HSRadio";
import { Roboto } from "next/font/google";
import { useState } from "react";
import atom from '@/public/icons/atom.png';
import HSPicketProgressBar from "@/components/common/chart/HSPicketProgressBar";
import HSTextArea from "@/components/common/input/HSTextArea";
import HSModal from "@/components/common/HSModal";
import Loading from "@/components/common/Loading";
import HSButton from "@/components/common/input/HSButton";
import HSLink from "@/components/common/input/HSLink";
import HSToggler from "@/components/common/input/HSToggler";
import HSFloatButton from "@/components/common/input/HSFloatButton";
import HSStepper from "@/components/common/HSStepper";
import HSTabs from "@/components/common/HSTabs";
import SimpleToast from "@/components/common/item/SimpleToast";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export default function TableTest() {
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState('');
  const [fieldValue, setFieldValue] = useState('');
  const [textarea, setTextarea] = useState('');
  const [modalActive, setModalActive] = useState(true);
  const [step, setStep] = useState('table');
  const [toast, setToast] = useState(false);
  return (
    <div className={font.className} style={{padding: 20}}>
      <HSTabs
      selected={step}
      clickTab={(s: string) => setStep(s)}
      items={[
        {raw: 'table', display: 'Table Page'},
        {raw: 'paddington', display: 'Paddington'},
        {raw: 'COT', display: 'City of Troy'},
      ]}/>
      <HSStepper
      step={step}
      setStep={(s: string) => setStep(s)}
      items={[
        {raw: 'table', display: 'Table Page'},
        {raw: 'paddington', display: 'Paddington'},
        {raw: 'COT', display: 'City of Troy'},
      ]}/>
      <HSTableSet
      headers={[
        {
          raw: 'createdTimeAt',
          search: false,
          display: 'Created Time',
        },
        {
          raw: 'fieldA',
          search: true,
          display: 'Field A',
        },
        {
          raw: 'fieldB',
          search: true,
          display: 'Field B',
        },
      ]}
      getDatasApi={async () => {}}
      />
      <div>
        <HSCheckBox value={"abc"} checked={checked} text={'CheckBox'} onChange={() => setChecked(!checked)}/>
        <HSCheckBox value={"bsd"} checked={checked} text={'Select'} onChange={() => setChecked(!checked)} Switch/>
      </div>
      
      <div>
        <HSRadio value={"a"} selected={selected} text="Radio A" onClick={setSelected}/>
        <br/>
        <HSRadio value={"b"} selected={selected} text="Radio B" onClick={setSelected}/>
      </div>
      <div>
        <HSBigInput width={250} fieldName="Just Test" fieldValue={fieldValue} setFieldValue={setFieldValue} reduceBottomPadding imageSrc={atom.src} help="abc easy as 123"/>
      </div>
      <div style={{height: 55, width: 250, padding: '5px 0'}}>
        <HSPicketProgressBar red={110} green={0} blue={254} picket="55%" value={55} text="Yay"/>
      </div>
      <div>
        <HSTextArea fieldName="Text-Area" fieldValue={textarea} setFieldValue={setTextarea}/>
      </div>
      <HSModal active={modalActive} setActive={setModalActive} title="Modal" content={<div style={{width: 500, height: 300}}><Loading/></div>}/>
      <HSButton onClick={() => setModalActive(true)} text={"open modal"}/>
      <HSLink text="Hello." onClick={() => {}}/>
      <HSToggler items={[
        {display: 'a', onClick: () => alert('test')},
        {display: 'b', onClick: () => alert('test')},
        {display: 'c', onClick: () => alert('test')},
        {display: 'd', onClick: () => alert('test')},
        {display: 'e', onClick: () => alert('test')},
      ]}/>
      <HSFloatButton onClick={() => setToast(true)} bottom={20} right={20}/>
      <SimpleToast text="Toast is Activated" active={toast} close={() => setToast(false)}/>
    </div>
  )
}