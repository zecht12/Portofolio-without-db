import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React,{useState, useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine)
  },[])
  const particlesLoaded = useCallback(async ()=>{},[])

  return (
    <Particles id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={{
      fullScreen:{enable: false},
      background:{
        color:{
          value:'',
        },
      },
      f
    }} />
  )
};

export default ParticlesContainer;
