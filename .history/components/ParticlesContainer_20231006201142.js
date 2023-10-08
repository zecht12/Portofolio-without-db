import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React,{useState, useCallback} from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) =>{
    await loadFull(engine)
  })

  return (
    <div>

    </div>
  )
};

export default ParticlesContainer;
