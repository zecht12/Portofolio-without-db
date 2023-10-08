import { RxArrowTopRight, RxCrop, RxDesktop, RxPencil2, RxReader, RxRocket } from 'react-icons/rx'
import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Pagination, FreeMode } from 'swiper/modules';
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return(
    <Swiper breakpoints={{
      320:{
        slidePerView: 1,
        spaceBetween: 15,
      },
      640:{
        slidePerView: 3,
        spaceBetween: 15,
      }
    }}
    freeMode={true}
    pagination={{clickable: true}}
    modules={[FreeMode, Pagination]}
    className=' h-[240px] sm:h-[340px] '
    >
      {serviceData.map((item,index) => {
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 '>
              <div>
                {item.icon}
              </div>
              <div>
                <div>
                  {item.title}
                </div>
                <p>
                  {item.description}
                </p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default ServiceSlider;
