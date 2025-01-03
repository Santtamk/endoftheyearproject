'use client'

import { Room } from "@/app/models/room";
import Image from "next/image";
import React, { FC } from "react";

type Props = {
  featuredRoom: Room;
};

const FeaturedRoom: FC<Props> = (props) => {
  const { featuredRoom } = props;

  return (
    <section className="flex md:flex-row flex-col px-4 py-10 items-center gap-12 container">
      <div className="md:grid gap-8 grid-cols-1">
        <div className="rounded-2xl overflow-hidden h-48 mb-4 md:mb-0">
          <Image
            src={featuredRoom.coverImage.url}
            alt={featuredRoom.name}
            width={300}
            height={300}
            className="img scale-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoom;
