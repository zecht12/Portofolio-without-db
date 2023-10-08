import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React,{useState, useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine)
  },[])
  const particlesLoaded = useCallback(async ()=>{},[])

  return (
    <Particles className='w-full h-full translate-z-0 absolute' id='tsparticles' init={particlesInit} loaded={particlesLoaded} options={{
      fullScreen:{enable: false},
      background:{
        color:{
          value:'',
        },
      },
      fpsLimit:120,
      interactivity:{
        events:{
          onClick:{
            enable: false,
            mode:'push',
          },
          onHover:{
            enable: false,
            mode:'repulse',
          },
          resize: true,
        },
        modes:{
          push:{
            quantity: 90,
          },
          repulse:{
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles:{
        color:{
          value:"#e"
        }
      }
    }} />
  )
};

export default ParticlesContainer;
