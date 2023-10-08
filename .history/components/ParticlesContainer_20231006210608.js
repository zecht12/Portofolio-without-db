import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Cover() {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      fpsLimit:120,
      interactivity:{
        events:{
          onClick:{
            enable: true,
            mode:'push',
          },
          onHover:{
            enable: true,
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
          value:"#e68e2e"
        },
        links:{
          color:"#f5d393",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions:{
          enable: true,
        },
        move:{
          direction: 'none',
          enable: true,
          outModes:{
            default:'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number:{
          density:{
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity:{
          value: 0.5,
        },
        shape:{
          type:'circle',
        },
        size:{
          value:{min:1, max:5,}
        },
      },
      detectRetina: true,
    }} 
    />
  );
}
