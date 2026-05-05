import React from "react";

interface FlyerTemplateProps {
  teamName: string;
  memberName: string;
  profileImage: string | null;
}

export const FlyerTemplate = React.forwardRef<
  HTMLDivElement,
  FlyerTemplateProps
>(({ teamName, memberName, profileImage }, ref) => {
  return (
    <div
      ref={ref}
      className="w-96 h-120 bg-gradient-to-br from-dark-blue-600 via-dark-blue-700 to-dark-blue-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 relative"
      style={{
        width: "400px",
        height: "480px",
        aspectRatio: "5/6",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full gap-6">
        {/* Team Name - Top */}
        <div className="text-center mb-4 w-full">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            {teamName || "Team Name"}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Profile Image - Center */}
        <div className="flex-1 flex items-center justify-center">
          {profileImage ? (
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
              <img
                src={profileImage}
                alt={memberName}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-dark-blue-500 to-dark-blue-600 border-4 border-blue-400 flex items-center justify-center text-dark-blue-200">
              <svg
                className="w-20 h-20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Member Name - Bottom */}
        <div className="text-center w-full mt-4">
          <h2 className="text-2xl font-semibold text-white drop-shadow-lg">
            {memberName || "Member Name"}
          </h2>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-3 right-3 w-12 h-12 border-2 border-blue-400 rounded-lg opacity-30"></div>
      <div className="absolute bottom-3 left-3 w-12 h-12 border-2 border-indigo-400 rounded-lg opacity-30"></div>
    </div>
  );
});

FlyerTemplate.displayName = "FlyerTemplate";
