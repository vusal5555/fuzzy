import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile_picture";
import { db } from "@/lib/db";

type Props = {};

const Settings = (props: Props) => {
  const authUser = {
    id: "",
  };
  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>

      <div className="flex flex-col gap-10 p-6">
        <h2 className="text-2xl font-bold">User Profile</h2>
        <p className="text-base text-white/50">
          Add or update your information
        </p>
      </div>
      <div className="p-6">
        <ProfilePicture onDelete={removeProfileImage}></ProfilePicture>
      </div>
      <div className="p-6">
        <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
