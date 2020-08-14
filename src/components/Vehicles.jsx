import React from 'react'
import './ExploreContainer.css'
import UIfx from 'uifx'
import dogAudio from '../sounds/dog.mp3'
import catAudio from '../sounds/cat.mp3'
import wolfAudio from '../sounds/wolf.mp3'
import bearAudio from '../sounds/bear.mp3'
import pigAudio from '../sounds/pig.mp3'
import horseAudio from '../sounds/horse.mp3'

function importAll (r) {
  let images = {}
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}

const images = importAll(
  require.context('../images/vehicles', false, /\.(png|jpe?g|svg)$/)
)

const Animals = () => {
  const dog = new UIfx(dogAudio, { Volume: 0.4 })
  const cat = new UIfx(catAudio, { Volume: 0.4 })
  const wolf = new UIfx(wolfAudio, { Volume: 0.4 })
  const bear = new UIfx(bearAudio, { Volume: 0.4 })
  const pig = new UIfx(pigAudio, { Volume: 0.4 })
  const horse = new UIfx(horseAudio, { Volume: 0.4 })
  const duck = new UIfx(pigAudio, { Volume: 0.4 })
  const rabbit = new UIfx(pigAudio, { Volume: 0.4 })
  const camel = new UIfx(pigAudio, { Volume: 0.4 })
  const elephant = new UIfx(pigAudio, { Volume: 0.4 })
  const frog = new UIfx(pigAudio, { Volume: 0.4 })
  const hippo = new UIfx(pigAudio, { Volume: 0.4 })
  const dolphin = new UIfx(pigAudio, { Volume: 0.4 })
  const cobra = new UIfx(pigAudio, { Volume: 0.4 })
  const lamb = new UIfx(pigAudio, { Volume: 0.4 })
  const lion = new UIfx(pigAudio, { Volume: 0.4 })
  const penguin = new UIfx(pigAudio, { Volume: 0.4 })
  const rhino = new UIfx(pigAudio, { Volume: 0.4 })
  const squirrel = new UIfx(pigAudio, { Volume: 0.4 })
  const tiger = new UIfx(pigAudio, { Volume: 0.4 })
  const walruss = new UIfx(pigAudio, { Volume: 0.4 })
  const zebra = new UIfx(pigAudio, { Volume: 0.4 })

  return (
    <>
      <div className='container'>
        <img src={images['dog.png']} alt='dog' onClick={() => dog.play()} />
        <img src={images['cat.png']} alt='cat' onClick={() => cat.play()} />
        <img src={images['pig.png']} alt='pig' onClick={() => pig.play()} />
        <img src={images['duck.png']} alt='duck' onClick={() => duck.play()} />
        <img
          src={images['horse.png']}
          alt='horse'
          onClick={() => horse.play()}
        />
        <img
          src={images['rabbit.png']}
          alt='rabbit'
          onClick={() => rabbit.play()}
        />
        <img src={images['wolf.png']} alt='wolf' onClick={() => wolf.play()} />
        <img src={images['bear.png']} alt='bear' onClick={() => bear.play()} />
        <img
          src={images['camel.png']}
          alt='camel'
          onClick={() => camel.play()}
        />
        <img
          src={images['elephant.png']}
          alt='elephant'
          onClick={() => elephant.play()}
        />
        <img src={images['frog.png']} alt='frog' onClick={() => frog.play()} />
        <img
          src={images['hippo.png']}
          alt='hippo'
          onClick={() => hippo.play()}
        />
        <img
          src={images['dolphin.png']}
          alt='dolphin'
          onClick={() => dolphin.play()}
        />
        <img
          src={images['cobra.png']}
          alt='cobra'
          onClick={() => cobra.play()}
        />
        <img src={images['lamb.png']} alt='lamb' onClick={() => lamb.play()} />
        <img src={images['lion.png']} alt='lion' onClick={() => lion.play()} />
        <img
          src={images['penguin.png']}
          alt='penguin'
          onClick={() => penguin.play()}
        />
        <img
          src={images['rhino.png']}
          alt='rhino'
          onClick={() => rhino.play()}
        />
        <img
          src={images['squirrel.png']}
          alt='squirrel'
          onClick={() => squirrel.play()}
        />
        <img
          src={images['tiger.png']}
          alt='tiger'
          onClick={() => tiger.play()}
        />
        <img
          src={images['walruss.png']}
          alt='walruss'
          onClick={() => walruss.play()}
        />
        <img
          src={images['zebra.png']}
          alt='zebra'
          onClick={() => zebra.play()}
        />
      </div>
    </>
  )
}

export default Animals
