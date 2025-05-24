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
      className={`flex flex-col items-center p-3 ${
        activeSection !== COMMERCIAL ? "ml-8" : ""
      }`}
    >
      <div className="relative">

        <svg
          className="absolute inset-0 -rotate-90 transform"
          width={51.22}
          height={51.22}
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
          className="relative w-[51.22px] h-[51.22px] border-white/30 flex items-center justify-center hover:border-white/50 transition-colors group"
          aria-label={isVideoPaused ? "Play video" : "Pause video"}
        >
          {isVideoPaused ? (
            <div className="w-0 h-0 border-l-[10px] border-l-white border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent ml-1 transition-colors"></div>
          ) : (
            <div className="flex space-x-1">
              <div className="w-1.5 h-5 bg-white transition-colors"></div>
              <div className="w-1.5 h-5 bg-white transition-colors"></div>
            </div>
          )}
        </button>
      </div>

      <span className="text-xs text-gray-300 opacity-50 mt-2">
        {isVideoPaused ? "Play" : "Pause"}
      </span>
    </div>
  );
};
