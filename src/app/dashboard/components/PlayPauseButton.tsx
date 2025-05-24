import { COMMERCIAL } from "core/utils/constants/constants";

interface PlayPauseButtonProps {
  activeSection: string;
  videoProgress: number;
  toggleVideoPlayback: () => void;
  isVideoPaused: boolean;
}

export const PlayPauseButton = ({
  activeSection,
  videoProgress,
  toggleVideoPlayback,
  isVideoPaused,
}: PlayPauseButtonProps) => {
  return (
    <div
      className={`flex flex-col items-center p-2 sm:p-3 ${
        activeSection !== COMMERCIAL ? "ml-4 sm:ml-8" : ""
      }`}
    >
      <div className="relative w-[40px] h-[40px] sm:w-[51.22px] sm:h-[51.22px]">
        <svg
          className="absolute inset-0 -rotate-90 transform"
          width="100%"
          height="100%"
          viewBox="0 0 51.22 51.22"
        >
          <circle
            cx="25.61"
            cy="25.61"
            r="24.61"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="25.61"
            cy="25.61"
            r="24.61"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 24.61}`}
            strokeDashoffset={`${
              2 * Math.PI * 24.61 * (1 - videoProgress / 100)
            }`}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        <button
          onClick={toggleVideoPlayback}
          className="relative w-full h-full border border-white/30 flex items-center justify-center hover:border-white/50 transition-colors group rounded-full"
          aria-label={isVideoPaused ? "Play video" : "Pause video"}
        >
          {isVideoPaused ? (
            <div className="w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-white border-t-[6px] sm:border-t-[7px] border-t-transparent border-b-[6px] sm:border-b-[7px] border-b-transparent ml-1 transition-colors"></div>
          ) : (
            <div className="flex space-x-[3px] sm:space-x-1">
              <div className="w-1 h-4 sm:w-1.5 sm:h-5 bg-white transition-colors"></div>
              <div className="w-1 h-4 sm:w-1.5 sm:h-5 bg-white transition-colors"></div>
            </div>
          )}
        </button>
      </div>

      <span className="text-[10px] sm:text-xs text-gray-300 opacity-50 mt-2">
        {isVideoPaused ? "Play" : "Pause"}
      </span>
    </div>
  );
};
