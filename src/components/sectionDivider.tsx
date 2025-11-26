import React from "react";

interface SectionDividerProps {
  className?: string;
  flipY?: boolean; // flip vertically
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  className = "",
  flipY = false,
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${
        flipY ? "scale-y-[-1]" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 -39 1339.999 220"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
      >
        <g>
          <path
            fill="#FAF4E7"
            d="M385.323 121.943c4.468-2.807 10.24-5.467 17.095-7.737
            14.891-4.93 31.259-6.813 43.565-5.574
            ... 
            2.93.756z"
          />
        </g>
      </svg>
    </div>
  );
};

export default SectionDivider;
