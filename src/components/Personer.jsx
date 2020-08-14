import React from 'react'
import './ExploreContainer.css'
// import UIfx from 'uifx'
// import {
//   IonCard,
//   IonCardTitle,
//   IonCardHeader,
//   IonImg,
//   IonRippleEffect
// } from '@ionic/react'

// import dogAudio from '../sounds/dogbark2.mp3'
// import kittenAudio from '../sounds/kitten2.mp3'
// import dolphinAudio from '../sounds/dolphin1.mp3'
// import wolfAudio from '../sounds/wolf7.mp3'
// import bearAudio from '../sounds/grizzbear.mp3'
// import elephantAudio from '../sounds/elephant9.mp3'

function importAll (r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(
  require.context('../images/personer', false, /\.(png|jpe?g|svg)$/)
)

const ExploreContainer = () => {
  // const dog = new UIfx(dogAudio, { Volume: 0.4, throttleMs: 100 })
  // const kitten = new UIfx(kittenAudio, { Volume: 0.4, throttleMs: 100 })
  // const dolphin = new UIfx(dolphinAudio, { Volume: 0.4, throttleMs: 100 })
  // const wolf = new UIfx(wolfAudio, { Volume: 0.4, throttleMs: 100 })
  // const bear = new UIfx(bearAudio, { Volume: 0.4, throttleMs: 100 })
  // const elephant = new UIfx(elephantAudio, { Volume: 0.4, throttleMs: 100 })

  return (
    <>
      <div className='container ion-activatable ripple-parent'>
        {/* <img onClick={() => dog.play()} src={images['dog.jpg']} alt="dog"/>
        <img onClick={() => kitten.play()} src={images['kitten.png']} alt="dog"/>
        <img onClick={() => dolphin.play()} src={images['dolphin.png']} alt="dog"/>
        <img onClick={() => wolf.play()} src={images['wolf.png']} alt="dog"/>
        <img onClick={() => bear.play()} src={images['bear.png']} alt="dog"/>
        <img onClick={() => elephant.play()} src={images['elephant.png']} alt="dog"/> */}
      </div>
    </>
  )
}

export default ExploreContainer
