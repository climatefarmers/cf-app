"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import manuel from "../../public/images/manuel-profile.png";
import { FarmInfoData } from "../types/types";

type ProfileContentProps = {
  farmInfoData: FarmInfoData[];
};

const ProfileContent: React.FC<ProfileContentProps> = ({ farmInfoData }) => {
  const { data: session } = useSession();

  if (!session?.user) return <h1>You must sign in to see this page</h1>;

  return (
    <main>
      <section>
        <figure className="flex gap-8">
          <Image src={manuel} alt="profile" />
          <figcaption className="text-green">
            <h1>{farmInfoData?.[0]?.landownerfirstname}</h1>
            <h4>
              {farmInfoData?.[0]?.farmname} | {farmInfoData?.[0]?.farmsize}
            </h4>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default ProfileContent;