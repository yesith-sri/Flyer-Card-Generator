"use client";

import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { TeamSelector } from "@/components/TeamSelector";
import { MemberSelector } from "@/components/MemberSelector";
import { ImageCropper } from "@/components/ImageCropper";
import { FlyerTemplate } from "@/components/FlyerTemplate";
import { getAllTeams, getTeamMembers, TeamMember, Team } from "@/lib/firebaseQueries";

export default function Home() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [selectedMember, setSelectedMember] = useState<string>("");
  const [selectedMemberData, setSelectedMemberData] = useState<TeamMember | null>(
    null
  );
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [showCropper, setShowCropper] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const flyerRef = useRef<HTMLDivElement>(null);

  // Load teams on mount
  useEffect(() => {
    const loadTeams = async () => {
      setIsLoading(true);
      try {
        const loadedTeams = await getAllTeams();
        setTeams(loadedTeams);
      } catch (error) {
        console.error("Error loading teams:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeams();
  }, []);

  // Load members when team is selected
  useEffect(() => {
    const loadMembers = async () => {
      if (!selectedTeam) {
        setMembers([]);
        setSelectedMember("");
        setSelectedMemberData(null);
        return;
      }

      setIsLoading(true);
      try {
        const loadedMembers = await getTeamMembers(selectedTeam);
        setMembers(loadedMembers);
      } catch (error) {
        console.error("Error loading members:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadMembers();
  }, [selectedTeam]);

  // Update selected member data
  useEffect(() => {
    if (selectedMember) {
      const member = members.find((m) => m.id === selectedMember);
      setSelectedMemberData(member || null);
    } else {
      setSelectedMemberData(null);
    }
  }, [selectedMember, members]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        setShowCropper(true);
        setCroppedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedImage: string) => {
    setCroppedImage(croppedImage);
    setShowCropper(false);
  };

  const downloadFlyer = async () => {
    if (!flyerRef.current || !selectedTeam || !selectedMemberData) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(flyerRef.current, {
        backgroundColor: null,
        scale: 2,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${selectedTeam}_${selectedMemberData.name}_flyer.png`;
      link.click();
    } catch (error) {
      console.error("Error downloading flyer:", error);
      alert("Failed to download flyer. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-blue-900 via-dark-blue-800 to-dark-blue-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Flyer Generator
          </h1>
          <p className="text-gray-400 text-lg">
            Create your professional event flyer in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Controls */}
          <div className="space-y-6">
            <div className="bg-dark-blue-700 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-dark-blue-600">
              <h2 className="text-2xl font-bold mb-6 text-blue-300">
                Step 1: Select Team & Member
              </h2>

              {/* Team Selector */}
              <div className="mb-6">
                <TeamSelector
                  teams={teams}
                  selectedTeam={selectedTeam}
                  onTeamChange={setSelectedTeam}
                  isLoading={isLoading}
                />
              </div>

              {/* Member Selector */}
              {selectedTeam && (
                <div className="mb-8">
                  <MemberSelector
                    members={members}
                    selectedMember={selectedMember}
                    onMemberChange={setSelectedMember}
                    isLoading={isLoading}
                  />
                </div>
              )}
            </div>

            {/* Image Upload & Crop */}
            {selectedMember && (
              <div className="bg-dark-blue-700 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-dark-blue-600">
                <h2 className="text-2xl font-bold mb-6 text-blue-300">
                  Step 2: Upload & Crop Photo
                </h2>

                {!showCropper && !croppedImage && (
                  <label className="block">
                    <div className="border-2 border-dashed border-blue-400 rounded-lg p-8 text-center cursor-pointer hover:border-blue-300 hover:bg-dark-blue-600 transition-all duration-200">
                      <svg
                        className="w-12 h-12 mx-auto mb-3 text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-gray-300 font-semibold">
                        Click to upload your photo
                      </p>
                      <p className="text-gray-500 text-sm mt-1">
                        PNG, JPG up to 10MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}

                {showCropper && (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 mb-4">
                      Crop your image to fit the circular frame
                    </p>
                    <ImageCropper
                      imageSrc={uploadedImage || ""}
                      onCropComplete={handleCropComplete}
                    />
                  </div>
                )}

                {croppedImage && !showCropper && (
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden bg-dark-blue-800 p-4">
                      <img
                        src={croppedImage}
                        alt="Cropped preview"
                        className="w-full rounded-lg"
                      />
                    </div>
                    <button
                      onClick={() => setShowCropper(true)}
                      className="w-full bg-dark-blue-600 hover:bg-dark-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                    >
                      Re-crop Image
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Download Button */}
            {selectedMember && croppedImage && (
              <button
                onClick={downloadFlyer}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Flyer
                  </>
                )}
              </button>
            )}
          </div>

          {/* Right Panel - Preview */}
          <div className="sticky top-6 h-fit">
            <div className="bg-dark-blue-700 bg-opacity-50 backdrop-blur rounded-2xl p-8 border border-dark-blue-600">
              <h2 className="text-2xl font-bold mb-6 text-blue-300">Preview</h2>

              <div className="flex items-center justify-center bg-dark-blue-900 rounded-xl p-8">
                <FlyerTemplate
                  ref={flyerRef}
                  teamName={selectedTeam}
                  memberName={selectedMemberData?.name || ""}
                  profileImage={croppedImage}
                />
              </div>

              <div className="mt-6 p-4 bg-dark-blue-800 rounded-lg border border-dark-blue-600">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-blue-300">Note:</span> The
                  flyer will be downloaded as a PNG image with high quality. Team
                  name appears at the top, your photo in the center, and your name
                  at the bottom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
