import React from 'react';
import { ReactComponent as SpinnerLoader } from '../../../assets/svg/spinner-loader.svg';
import "./Spinner.scss";

export default function Spinner() {
  return (
    <div className='loader_svg-container'>
      <SpinnerLoader />
    </div>
  )
}
