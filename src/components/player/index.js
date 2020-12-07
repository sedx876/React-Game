import React from 'react'
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'


function Player({ skin }){

  const { dir, step, walk, position } = useWalk(3)

  const data = {
    h: 32,
    w: 32,
  }

  

  useKeyPress((e) => {
    // const dir = e.key.replace('Arrow', '').toLowerCase()
    walk(e.key.replace('Arrow', '').toLowerCase())
    console.dir(dir)
    e.preventDefault()
  })

  return(
    <Actor 
        sprite={`/sprites/skins/${skin}.png`}
        data={data}
        step={step}
        dir={dir}
        position={position}
    />
  )
}

export default Player