import Image from "next/image";
import React from "react";

type Props = { hasName: boolean; size: "md" | "lg" };

type Profile = {
  id: number;
  userName: string;
  userImageUrl: string;
};

const defaultProps = {
  hasName: false,
};

export const Profile: React.FC<Props> = async (props) => {
  const { hasName, size } = { ...defaultProps, ...props };
  const data = await fetch("http://localhost:3080/profile");
  const profile = (await data.json()) as Profile;

  return (
    <div className="side_profile-image">
      <img
        src={profile.userImageUrl}
        alt=""
        width={size === "md" ? 40 : 60}
        height={size === "md" ? 40 : 60}
      />
      {hasName && <p>{profile.userName}</p>}
    </div>
  );
};
