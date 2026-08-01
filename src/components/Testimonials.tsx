"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <Section tone="primary" className="overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What residents and buyers say"
          align="center"
          light
        />
        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".testimonial-pagination" }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
            className="!pb-4"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                <div className="flex h-full flex-col rounded-2xl bg-white/5 p-7 backdrop-blur">
                  <Quote className="text-accent-light" size={28} />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full">
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="44px" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-white/50">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination mt-6 flex justify-center gap-2" />
        </div>
      </Container>
    </Section>
  );
}
