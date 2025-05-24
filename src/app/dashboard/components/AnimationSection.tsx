"use client";
import { useRef } from "react";
import {
  commercialVideoAsset,
  passengerVehiclePartsAsset,
} from "@/app/dashboard/utils/mockData";
import { AnimatePresence, motion } from "framer-motion";
import { PlayPauseButton } from "@/app/dashboard/components/PlayPauseButton";
import { useAnimationSectionState } from "@/app/dashboard/utils/hooks/useAnimationSectionState";
import { isPassengerSection } from "core/utils/helpers/AnimationSectionFunctions";
import { COMMERCIAL, PASSENGER } from "core/utils/constants/constants";
import Image from "next/image";

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
                                          (part) =>
                                            part.id === state.activeSection
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
                                onClick={() =>
                                  updateState({ activeSection: part.id })
                                }
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

            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <motion.div
                className="text-center pt-16 pb-8"
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
                <h2 className="text-2xl sm:text-3xl font-manrope font-light mb-2">
                  Evolving the drive with{" "}
                  <span className="font-semibold">360-degree</span>
                </h2>
                <p className="text-2xl sm:text-3xl font-manrope font-light">
                  nonwoven solutions
                </p>
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
                    className="space-y-12"
                  >

                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-manrope font-medium text-blue-400 mb-2">
                          Passenger vehicles
                        </h3>
                        <p className="text-base sm:text-lg font-manrope text-white/80 leading-relaxed">
                          Revving up innovation
                          <br />
                          from interior to exterior.
                        </p>
                      </div>

                      <div className="relative mb-4">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={state.activeSection}
                            initial={{ x: 100, opacity: 0, scale: 0.9 }}
                            animate={{ x: 0, opacity: 1, scale: 1 }}
                            exit={{ x: -100, opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-64 sm:h-72 flex items-center justify-center"
                          >
                            <video
                              className="w-full h-full object-contain"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source
                                src={
                                  isPassengerSection(state.activeSection)
                                    ? passengerVehiclePartsAsset.find(
                                        (part) =>
                                          part.id === state.activeSection
                                      )?.assetvideo ||
                                      passengerVehiclePartsAsset[0].assetvideo
                                    : passengerVehiclePartsAsset[0].assetvideo
                                }
                                type="video/mp4"
                              />
                            </video>
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-xl font-manrope font-medium text-white">
                          {isPassengerSection(state.activeSection)
                            ? passengerVehiclePartsAsset.find(
                                (part) => part.id === state.activeSection
                              )?.label || "Front"
                            : "Front"}
                        </h4>
                      </div>

                    
                      {passengerVehiclePartsAsset.map((part) => (
                        <button
                          key={part.id}
                          onClick={() =>
                            updateState({ activeSection: part.id })
                          }
                          className={`h-3 rounded-full bg-toggleBlue transition-all mx-1 duration-300 ease-in-out
      ${
        state.activeSection === part.id ? "w-7 opacity-100" : "w-3 opacity-60"
      }`}
                        />
                      ))}
                    </div>

                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-2xl sm:text-3xl font-manrope font-medium text-blue-400 mb-2">
                          Commercial vehicles
                        </h3>
                        <p className="text-base sm:text-lg font-manrope text-white/80 leading-relaxed">
                          Advancing engineering
                          <br />
                          for heavy-duty vehicles.
                        </p>
                      </div>
                      <div className="relative mb-4">
                        <motion.div
                          initial={{ y: 50, opacity: 0, scale: 0.9 }}
                          animate={{ y: 0, opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                          className="relative h-64 sm:h-72 flex items-center justify-center"
                        >
                          <video
                            className="w-full h-full object-contain"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            <source
                              src={commercialVideoAsset}
                              type="video/mp4"
                            />
                          </video>
                        </motion.div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-xl font-manrope font-medium text-white">
                          Complete Body
                        </h4>
                      </div>

                      <button
                        className={`h-3 w-7 rounded-full bg-toggleBlue transition-all mx-1 duration-300 ease-in-out
     `}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
