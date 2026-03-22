"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type ServiceFlipCardProps = {
  icon: React.ReactNode;
  title: string;
  tagline?: string;
  description: string;
  image: string;
};

export default function ServiceFlipCard({ icon, title, tagline, description, image }: ServiceFlipCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const frontRef = useRef<HTMLDivElement>(null);
  const [frontHeight, setFrontHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (frontRef.current) {
      setFrontHeight(frontRef.current.offsetHeight);
    }
  }, []);

  return (
    <div
      className="relative"
      style={{ minHeight: frontHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Front */}
      <div
        ref={frontRef}
        className={`relative bg-white rounded-2xl p-8 border border-navy-100/80 overflow-hidden transition-all duration-400 ease-in-out ${
          isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-navy-900 mb-3 font-display">{title}</h3>
          {tagline && (
            <p className="text-navy-700 font-semibold text-[15px] mb-3">{tagline}</p>
          )}
          <p className="text-navy-500 leading-relaxed text-[15px] text-justify whitespace-pre-line">{description}</p>
        </div>
      </div>

      {/* Back — image, positioned absolutely over front */}
      <div
        className={`absolute top-0 left-0 right-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-navy-900/10 transition-all duration-500 ease-in-out ${
          isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={600}
            height={800}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-white font-display drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
