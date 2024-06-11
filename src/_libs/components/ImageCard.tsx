import Image from "next/image";
import React from "react";
import {
  FEATURE_IMAGE_STYLES,
  IMAGE_CARD_STYLES,
  IMAGE_OVERLAY_CONTAINER_STYLES,
  IMAGE_OVERLAY_STYLES,
  IMAGE_STYLES,
} from "../styles/ImageCardStyles";

import cn from "../utils/cn";
import { ImageCardProps } from "../interfaces/ImageCardProps";
import { ITEM_TYPES } from "../constants/ItemTypes";
import { useDrag, useDrop } from "react-dnd";
import { CHECKBOX_STYLES } from "../styles/CheckBoxStyles";

export default function ImageCard(props: ImageCardProps) {
  const { img, moveImage, findImage } = props;
  const { id, src } = img;

  const originalIndex = findImage(id).index;
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ITEM_TYPES.IMAGE,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          moveImage(droppedId, originalIndex);
        }
      },
    }),
    [id, originalIndex, moveImage]
  );
  const [, drop] = useDrop(
    () => ({
      accept: ITEM_TYPES.IMAGE,
      hover(item: { id: string }) {
        const draggedId = item.id;
        if (draggedId !== id) {
          const { index: overIndex } = findImage(id);
          moveImage(draggedId, overIndex);
        }
      },
    }),
    [findImage, moveImage]
  );

  const opacity = isDragging ? 0 : 1;
  return (
    <div
      className={cn(`${IMAGE_CARD_STYLES} ${FEATURE_IMAGE_STYLES}`)}
      ref={(node) => {
        drag(node);
        drop(node);
      }}
      style={{ opacity }}
    >
      <div className="relative group">
        <label className="cursor-pointer">
          <div className={CHECKBOX_STYLES}>
            <input type="checkbox" />
          </div>
          <div className={IMAGE_OVERLAY_CONTAINER_STYLES}>
            <Image
              src={src}
              alt={`Image-${id}`}
              height={500}
              width={500}
              priority
              className={IMAGE_STYLES}
            />
            <div className={IMAGE_OVERLAY_STYLES} />
          </div>
        </label>
      </div>
    </div>
  );
}
