import Image from "next/image";
import React from "react";
import {
  FEATURE_IMAGE_STYLES,
  IMAGE_CARD_STYLES,
  IMAGE_OVERLAY_STYLES,
  IMAGE_STYLES,
} from "../styles/ImageCardStyles";

import cn from "../utils/cn";
import { ImageCardProps } from "../interfaces/ImageCardProps";

export default function ImageCard(props: ImageCardProps) {
  const { img } = props;
  const { id, src } = img;
  return (
    <div className={cn(`${IMAGE_CARD_STYLES} ${FEATURE_IMAGE_STYLES}`)}>
      <div className="relative group">
        <label className="cursor-pointer">
          <div className="absolute top-2 left-2 z-10">
            <input type="checkbox" />
          </div>
          <div className={`w-full h-full overflow-hidden relative`}>
            <Image
              src={src}
              alt={`Image-${id}`}
              height={500}
              width={500}
              priority
              className={IMAGE_STYLES}
            />
            <div className={IMAGE_OVERLAY_STYLES}></div>
          </div>
        </label>
      </div>
    </div>
  );
}
