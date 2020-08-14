import React from 'react'
import './ExploreContainer.css'
import UIfx from 'uifx'
import dogAudio from '../sounds/dogbark2.mp3'
import kittenAudio from '../sounds/kitten2.mp3'
import wolfAudio from '../sounds/wolf7.mp3'
import bearAudio from '../sounds/grizzbear.mp3'
import pigAudio from '../sounds/pig.mp3'
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonImg,
  IonRippleEffect
} from '@ionic/react'

function importAll (r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(
  require.context('../images/svenska', false, /\.(png|jpe?g|svg)$/)
)

const SvenskaDjur = () => {
  const dog = new UIfx(dogAudio, { Volume: 0.4, throttleMs: 100 })
  const kitten = new UIfx(kittenAudio, { Volume: 0.4, throttleMs: 100 })
  const wolf = new UIfx(wolfAudio, { Volume: 0.4, throttleMs: 100 })
  const bear = new UIfx(bearAudio, { Volume: 0.4, throttleMs: 100 })
  const pig = new UIfx(pigAudio, { Volume: 0.4, throttleMs: 100 })

  return (
    <>
      <div className='container'>
        <button className='ion-activatable ripple-parent'>
          <img src={images['dog.jpg']} alt='dog' onClick={() => dog.play()} />
          <IonRippleEffect type="bounded"></IonRippleEffect>
        </button>
        <button className='ion-activatable ripple-parent'>
          <img
            src={images['kitten.png']}
            alt='kitten'
            onClick={() => kitten.play()}
          />
          <IonRippleEffect></IonRippleEffect>
        </button>
        <button className='ion-activatable ripple-parent'>
          <img
            src={images['wolf.png']}
            alt='wolf'
            onClick={() => wolf.play()}
          />
          <IonRippleEffect></IonRippleEffect>
        </button>
        <button className='ion-activatable ripple-parent'>
          <img
            src={images['bear.png']}
            alt='bear'
            onClick={() => bear.play()}
          />
          <IonRippleEffect></IonRippleEffect>
        </button>
        <button className='ion-activatable ripple-parent'>
          <img src={images['pig.png']} alt='pig' onClick={() => pig.play()} />
          <IonRippleEffect></IonRippleEffect>
        </button>
      </div>
    </>
  )
}

export default SvenskaDjur
