"use client"
import { Couch } from "@/shared/ui/cards/couch"
import { couchKidsItems } from "@/lib/data/more-course/for-kids"
import { useMediaQuery } from "@/lib/hooks/use-media-query"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import SvgArrowLeft from "@/assets/icons/ArrowLeft"
import SvgArrowRight from "@/assets/icons/ArrowRight"

export const CouchKidsSection = ({ description }: { description: string }) => {
  const isMedia = useMediaQuery("(max-width: 600px)")
  return (
    <div className="flex flex-col gap-2">
      <h3 className="530:text-[42px] text-[32px] 530:leading-normal leading-7 pb-2">
        Наши <span className="text-gradient-white">преподаватели</span>
      </h3>
      <p className="text-[18px]">{description}</p>
      {isMedia ? (
        <div className="relative flex justify-center">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              prevEl: ".couch-prev",
              nextEl: ".couch-next",
            }}
            className="w-full flex justify-center"
          >
            {couchKidsItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative flex justify-center">
                  <Couch
                    name={item.name}
                    img={item.img}
                    direction={item.direction}
                  />
                  <div className="couch-prev absolute left-1 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-3 bg-white/70 rounded-full shadow">
                    <SvgArrowLeft className="text-black" />
                  </div>
                  <div className="couch-next absolute right-1 top-1/2 -translate-y-1/2 z-50 cursor-pointer p-3 bg-white/70 rounded-full shadow">
                    <SvgArrowRight className="text-black" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="flex items-center gap-3 overflow-x-auto">
          {couchKidsItems.map((item) => (
            <Couch
              key={item.id}
              name={item.name}
              img={item.img}
              direction={item.direction}
            />
          ))}
        </div>
      )}
    </div>
  )
}
