import { COMMERCIAL, PASSENGER } from "core/utils/constants/constants";
import { RefObject, useEffect, useState } from "react";

export interface IUseAnimationSectionState {
  isVisible: boolean;
  showVehicle: boolean;
  activeSection: string;
  isVideoPaused: boolean;
  videoProgress: number;
}
interface UseAnimationStateProps {
  sectionRef: RefObject<HTMLElement>;
  videoRef: RefObject<HTMLVideoElement>;
}
export const useAnimationSectionState = ({sectionRef,videoRef}:UseAnimationStateProps) => {
  const [state, setState] = useState<IUseAnimationSectionState>({
    isVisible: false,
    showVehicle: false,
    activeSection: "passenger",
    isVideoPaused: false,
    videoProgress: 0,
  });

  const updateState = (newState: Partial<IUseAnimationSectionState>) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = Math.max(0, -rect.top);
      const totalScrollableHeight = sectionHeight - viewportHeight;
      const progress = Math.min(
        1,
        Math.max(0, scrolled / totalScrollableHeight)
      );


      if (progress > 0.25) {
        updateState({ activeSection: COMMERCIAL });
      } else {
        updateState({ activeSection: PASSENGER });
      }
    };

    const throttle = (func: Function, limit: number) => {
      let inThrottle: boolean;
      return function (this: any, ...args: any[]) {
        if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledHandleScroll = throttle(handleScroll, 16); 
    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateState({ isVisible: true });
            setTimeout(() => {
              updateState({ showVehicle: true });
            }, 1500);
          }
        });
      },
      {
        threshold: 0.2, 
        rootMargin: "-30px 0px -30px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (state.isVideoPaused) {
        videoRef.current.play();
        updateState({ isVideoPaused: false });
      } else {
        videoRef.current.pause();
        updateState({ isVideoPaused: true });
      }
    }
  };

  useEffect(() => {
    updateState({ isVideoPaused: false, videoProgress: 0 });
  }, [state.activeSection]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = video.currentTime / video.duration;
      updateState({ videoProgress: progress * 100 });
    };

    const handleVideoEnd = () => {
      updateState({ videoProgress: 0 });
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", handleVideoEnd);
    video.addEventListener("loadedmetadata", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadedmetadata", updateProgress);
    };
  }, [state.activeSection]);

  const getProgressHeight = () => {
    if (state.activeSection === COMMERCIAL) {
      return "100%";
    } else {
      return "50%";
    }
  };


  const handleSectionChange = (section: string) => {
    updateState({ activeSection: section });

    if (!sectionRef.current) return;

    const sectionHeight = sectionRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const sectionTop = sectionRef.current.offsetTop;

    if (section === COMMERCIAL) {
      const targetScroll = sectionTop + (sectionHeight - viewportHeight) * 0.3;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }

    else if (section === PASSENGER) {
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };
  return { state, updateState,getProgressHeight,handleSectionChange,toggleVideoPlayback };
};
