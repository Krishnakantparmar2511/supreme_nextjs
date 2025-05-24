import {
  commercialVideoAsset,
  passengerVehiclePartsAsset,
} from "@/app/dashboard/utils/mockData";
import { isPassengerSection } from "core/utils/helpers/AnimationSectionFunctions";
import { AnimatePresence, motion } from "framer-motion";
import { IUseAnimationSectionState } from "@/app/dashboard/utils/hooks/useAnimationSectionState";
interface IMobileAnimationContainerProps {
  state: IUseAnimationSectionState;
  updateState: (newState: Partial<IUseAnimationSectionState>) => void;
}
export const MobileAnimationContainer = ({
  state,
  updateState,
}: IMobileAnimationContainerProps) => {
  return (
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
                                (part) => part.id === state.activeSection
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
                  onClick={() => updateState({ activeSection: part.id })}
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
                    <source src={commercialVideoAsset} type="video/mp4" />
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
  );
};
