"use client";
import { useRef } from "react";
import { useAnimationSectionState } from "@/app/dashboard/utils/hooks/useAnimationSectionState";
import { DesktopAnimationContainer } from "@/app/dashboard/components/DesktopAnimationContainer";
import { MobileAnimationContainer } from "@/app/dashboard/components/MobileAnimationContainer";

export const AnimationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    state,
    updateState,
    getProgressHeight,
    handleSectionChange,
    toggleVideoPlayback,
  } = useAnimationSectionState({ sectionRef: sectionRef, videoRef: videoRef });

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative z-10 w-full py-20 min-h-screen lg:min-h-[200vh] bg-black text-white"
      >
        <div className="sticky top-0 lg:h-screen flex justify-center lg:items-center px-4 lg:px-8">
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col">
            {/* Desktop Layout */}
            <DesktopAnimationContainer
              state={state}
              updateState={updateState}
              videoRef={videoRef}
              toggleVideoPlayback={toggleVideoPlayback}
              handleSectionChange={handleSectionChange}
              getProgressHeight={getProgressHeight}
            />

            {/* Mobile Layout */}
            <MobileAnimationContainer state={state} updateState={updateState} />
          </div>
        </div>
      </section>
    </div>
  );
};
