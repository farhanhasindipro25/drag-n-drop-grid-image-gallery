"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY_IMAGES } from "../statics/galleryImages";
import ImageCard from "./ImageCard";
import EmptyState from "./EmptyState";
import { useDrop } from "react-dnd";
import { ITEM_TYPES } from "../constants/ItemTypes";
import update from "immutability-helper";

export default function Gallery() {
  const [images, setImages] = useState(GALLERY_IMAGES);
  const dropRef = useRef<HTMLDivElement>(null);
  const findImage = useCallback(
    (id: string) => {
      const image = images.filter((image) => `${image.id}` === id)[0];
      return {
        image,
        index: images.indexOf(image),
      };
    },
    [images]
  );
  const moveImage = useCallback(
    (id: string, atIndex: number) => {
      const { image, index } = findImage(id);
      setImages(
        update(images, {
          $splice: [
            [index, 1],
            [atIndex, 0, image],
          ],
        })
      );
    },
    [findImage, images, setImages]
  );
  const [, drop] = useDrop(() => ({ accept: ITEM_TYPES.IMAGE }));
  useEffect(() => {
    if (dropRef.current) {
      drop(dropRef.current);
    }
  }, [drop]);

  return (
    <section className="w-full border border-gray-300 rounded-lg bg-white divide-y divide-gray-300">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">Gallery</h2>
      </div>
      <div className="p-4">
        {images.length > 0 ? (
          <div className="grid grid-cols-5 gap-4" ref={dropRef}>
            {images.map((img) => (
              <ImageCard
                key={img.id}
                img={img}
                findImage={findImage}
                moveImage={moveImage}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
