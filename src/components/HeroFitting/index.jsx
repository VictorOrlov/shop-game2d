import React from 'react';
import s from './HeroFitting.module.css';

const HeroFitting = ({ step1, step1v2, step2, step3, step4, step5, step6 }) => {
  function bodyBitch(){
    if(step2 !== ''){
      return step1v2
    }
    else{return step1}
  }
  return (
    <div className={s.wrapper}>
      <img src={bodyBitch()} alt="Hero" className={s.step1}/>
      {(step2 === '') ? '' : <img src={step2} className={s.step2} alt="helmet"/>}
      {(step3 === '') ? '' : <img src={step3} className={s.step3} alt="chest"/>}
      {(step4 === '') ? '' : <img src={step4} className={s.step4} alt="gloves"/>}
      {(step5 === '') ? '' : <img src={step5} className={s.step5} alt="boots"/>}
      {(step6 === '') ? '' : <img src={step6} className={s.step6} alt="helmet"/>}
    </div>
  )
}

export default HeroFitting;