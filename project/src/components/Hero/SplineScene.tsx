import React from 'react';
import { CreditCard } from 'lucide-react';
import { useSplineLoader } from '../../hooks/useSplineLoader';
import myImage from '../../assets/card.png';

export const SplineScene = () => {
  const isSplineLoaded = useSplineLoader();

  return (
    <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={myImage} alt="card"/>
      {/*{isSplineLoaded ? (*/}
      {/*  <spline-viewer*/}
      {/*    url="https://prod.spline.design/zJ-IZ95hremya5yr/scene.splinecode"*/}
      {/*    className="w-full h-full"*/}
      {/*    loading="lazy"*/}
      {/*    events-target="global"*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">*/}
      {/*    <CreditCard className="w-32 h-32 text-purple-400 animate-pulse" />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />*/}
    </div>
  );
};