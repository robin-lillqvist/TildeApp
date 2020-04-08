import React from 'react'
import './ExploreContainer.css'
import UIfx from 'uifx'
import dolphinAudio from '../sounds/dolphin1.mp3'
import coyoteAudio from '../sounds/coyote2.mp3'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images/amerikanska', false, /\.(png|jpe?g|svg)$/));



const AmerikanskaDjur = () => {

  const dolphin = new UIfx(dolphinAudio, { Volume: 0.4, throttleMs: 100 })
  const coyote = new UIfx(coyoteAudio, { Volume: 0.4, throttleMs: 100 })

  return (
    <>
      <div className='container'>
        <img onClick={() => dolphin.play()} src={images['dolphin.png']} alt="dog"/>
        <img onClick={() => coyote.play()} src={images['coyote.png']} alt="dog"/>
      </div>
    </>
  )
}

export default AmerikanskaDjur
