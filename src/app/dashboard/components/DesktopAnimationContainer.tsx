import { COMMERCIAL, PASSENGER } from "core/utils/constants/constants";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { IUseAnimationSectionState } from "@/app/dashboard/utils/hooks/useAnimationSectionState";
import { isPassengerSection } from "core/utils/helpers/AnimationSectionFunctions";
import {
  commercialVideoAsset,
  passengerVehiclePartsAsset,
} from "@/app/dashboard/utils/mockData";
import { PlayPauseButton } from "@/app/dashboard/components/PlayPauseButton";
import { RefObject } from "react";

interface IDesktopAnimationContainerProps {
  state: IUseAnimationSectionState;
  getProgressHeight: () => "100%" | "50%";
  handleSectionChange: (section: string) => void;
  toggleVideoPlayback: () => void;
  updateState: (newState: Partial<IUseAnimationSectionState>) => void;
  videoRef: RefObject<HTMLVideoElement>;
}
export const DesktopAnimationContainer = ({
  state,
  getProgressHeight,
  handleSectionChange,
  toggleVideoPlayback,
  updateState,
  videoRef,
}: IDesktopAnimationContainerProps) => {
  return (
    <div className="hidden lg:block">
      <motion.div
        className="text-center pt-20"
        initial={false}
        animate={{
          flex: state.showVehicle ? "0 0 auto" : "1 1 0%",
          justifyContent: state.showVehicle ? "flex-start" : "center",
          alignItems: state.showVehicle ? "flex-start" : "center",
          display: state.showVehicle ? "block" : "flex",
          flexDirection: state.showVehicle ? "row" : "column",
          marginBottom: state.showVehicle
            ? state.activeSection === COMMERCIAL
              ? "4rem"
              : "3rem"
            : "0",
          paddingTop: state.showVehicle ? "5rem" : "5rem",
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: state.showVehicle ? 0 : 0,
        }}
      >
        <div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-manrope font-light mb-4"
            initial={{ translateY: 64, opacity: 0 }}
            animate={{
              translateY: state.isVisible ? 0 : 64,
              opacity: state.isVisible ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.6,
            }}
          >
            Evolving the drive with{" "}
            <span className="font-semibold">360-degree</span>
          </motion.h2>

          <motion.p
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-manrope font-light"
            initial={{ translateY: 64, opacity: 0 }}
            animate={{
              translateY: state.isVisible ? 0 : 64,
              opacity: state.isVisible ? 1 : 0,
            }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.6,
            }}
          >
            nonwoven solutions
          </motion.p>
        </div>
      </motion.div>

      <AnimatePresence>
        {state.showVehicle && (
          <motion.div
            initial={{ translateY: 64, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 64, opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.2,
            }}
          >
            <div className="grid grid-cols-2 gap-16 items-center">
              <div className="flex items-center">
                <div className="relative h-[340px]">
                  <div className="absolute left-2 top-0 w-[2px] h-full bg-gray-600 rounded-full">
                    <div
                      className="w-full bg-white rounded-full transition-all duration-500 ease-out"
                      style={{ height: getProgressHeight() }}
                    />
                  </div>
                </div>

                <div className="pl-[4%] h-[340px]">
                  <div className="flex flex-col justify-center h-full space-y-12">
                    {isPassengerSection(state.activeSection) && (
                      <button
                        onClick={() => handleSectionChange(PASSENGER)}
                        className={`text-left font-manrope w-full transition-all duration-300 ease-out hover:opacity-100 rounded-lg p-2 ${
                          isPassengerSection(state.activeSection)
                            ? "opacity-100"
                            : "opacity-40 hover:opacity-70"
                        }`}
                      >
                        <div className="pl-6">
                          <h3 className="text-[28px] font-bold mb-3 transition-all duration-300 ease-out text-white">
                            Passenger vehicles
                          </h3>
                          <p className="text-lg transition-all duration-300 ease-out text-white font-normal leading-tight">
                            Revving up innovation from
                            <br />
                            interior to exterior.
                          </p>
                        </div>
                      </button>
                    )}

                    {state.activeSection == COMMERCIAL && (
                      <button
                        onClick={() => handleSectionChange(COMMERCIAL)}
                        className="font-manrope text-left w-full transition-all duration-300 ease-out hover:opacity-100 rounded-lg p-2"
                      >
                        <div className="pl-6">
                          <h3 className="text-[28px] font-bold mb-3 transition-all duration-300 text-white ease-out">
                            Commercial vehicles
                          </h3>
                          <p className="text-lg transition-all duration-300 ease-out text-white font-normal leading-tight">
                            Advancing engineering
                            <br />
                            for heavy-duty vehicles.
                          </p>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <div className="relative flex items-center justify-center">
                  <div className="relative w-full h-96">
                    <motion.div
                      key={
                        state.activeSection == COMMERCIAL
                          ? COMMERCIAL
                          : PASSENGER
                      }
                      initial={{ y: 100, opacity: 0, scale: 0.5 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: -100, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 rounded-lg overflow-hidden"
                    >
                      <video
                        ref={videoRef}
                        key={state.activeSection}
                        className="w-full h-full object-contain transition-all duration-500 ease-out"
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src={
                            state.activeSection === COMMERCIAL
                              ? commercialVideoAsset
                              : passengerVehiclePartsAsset.find(
                                  (part) => part.id === state.activeSection
                                )?.assetvideo ||
                                passengerVehiclePartsAsset[0].assetvideo
                          }
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </motion.div>
                  </div>
                </div>
              </AnimatePresence>
            </div>

            <div className="mt-8">
              <div className="flex justify-end items-end">
                {state.activeSection !== COMMERCIAL && (
                  <div className="flex space-x-4 font-manrope font-medium text-base">
                    {passengerVehiclePartsAsset.map((part, index) => (
                      <button
                        key={part.id}
                        onClick={() => updateState({ activeSection: part.id })}
                        className="flex flex-col items-center p-3 rounded-lg transition-all duration-300"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                          animation: state.showVehicle
                            ? "fadeInUp 0.5s ease-out forwards"
                            : "none",
                        }}
                      >
                        <Image
                          className={`transition-opacity duration-300 ${
                            state.activeSection === part.id
                              ? "opacity-100"
                              : "opacity-50 hover:opacity-75"
                          }`}
                          src={part.icon}
                          height={40}
                          width={40}
                          style={{
                            height: "40px",
                            width: "40px",
                          }}
                          sizes="69.68px"
                          alt={part.label}
                        />
                        <span
                          className={`text-xs text-gray-300 transition-opacity duration-300 mt-1 ${
                            state.activeSection === part.id
                              ? "opacity-100"
                              : "opacity-50 hover:opacity-75"
                          }`}
                        >
                          {part.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                <PlayPauseButton
                  activeSection={state.activeSection}
                  isVideoPaused={state.isVideoPaused}
                  toggleVideoPlayback={toggleVideoPlayback}
                  videoProgress={state.videoProgress}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
