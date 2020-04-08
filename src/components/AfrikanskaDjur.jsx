import React from 'react'
import './ExploreContainer.css'
import elephantAudio from '../sounds/elephant9.mp3'
import rhinoAudio from '../sounds/rhinos1.mp3'
import camelAudio from '../sounds/camel2.mp3'
import hippoAudio from '../sounds/hippo2.mp3'
import tigerAudio from '../sounds/Tiger4.mp3'
import zebraAudio from '../sounds/zebra7.mp3'

function importAll (r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const images = importAll(
  require.context('../images/afrikanska', false, /\.(png|jpe?g|svg)$/)
)

const ExploreContainer = () => {
  let elephant = new Audio(elephantAudio)
  let rhino = new Audio(rhinoAudio)
  let camel = new Audio(camelAudio)
  let hippo = new Audio(hippoAudio)
  let tiger = new Audio(tigerAudio)
  let zebra = new Audio(zebraAudio)

  return (
    <>
      <div className='container'>
        <img
          onClick={() => elephant.play()}
          src={images['elephant.png']}
          alt='dog'
        />
        <img
          onClick={() => rhino.play()}
          src={images['rhino.png']}
          alt='rhino'
        />
        <img
          onClick={() => camel.play()}
          src={images['camel.png']}
          alt='camel'
        />
        <img
          onClick={() => hippo.play()}
          src={images['hippo.png']}
          alt='hippo'
        />
        <img
          onClick={() => tiger.play()}
          src={images['tiger.png']}
          alt='tiger'
        />
        <img
          onClick={() => zebra.play()}
          src={images['zebra.png']}
          alt='zebra'
        />
      </div>
    </>
  )
}

export default ExploreContainer
