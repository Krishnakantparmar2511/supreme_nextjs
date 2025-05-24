import {
  PASSENGER,
  COMPLETE,
  FRONT,
  CABIN,
  TRUNK,
  EXTERIOR,
} from "core/utils/constants/constants";

export const isPassengerSection = (activeSection: string) => {
  return [PASSENGER, COMPLETE, FRONT, CABIN, TRUNK, EXTERIOR].includes(
    activeSection
  );
};
