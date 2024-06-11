"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY_IMAGES } from "../statics/galleryImages";
import ImageCard from "./ImageCard";
import EmptyState from "./EmptyState";
import { useDrop } from "react-dnd";
import { ITEM_TYPES } from "../constants/ItemTypes";
import update from "immutability-helper";
import {
  GALLERY_CONTAINER_STYLES,
  GALLERY_GRID_STYLES,
} from "../styles/GalleryStyles";
import ImageUploader from "./ImageUploader";
import { SelectedImageInterface } from "../interfaces/SelectedImageInterface";
import toast from "react-hot-toast";
import { handleDynamicToastMsg } from "../utils/handleDynamicToastMsg";
import { handleNumericalCasesInWordsForImages } from "../utils/handleNumericalCasesInWordsForImages";
import Button from "./Button";

export default function Gallery() {
  const [images, setImages] = useState(GALLERY_IMAGES);
  const [selectedImages, setSelectedImages] = useState<any>([]);
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

  const handleImageSelection = (selectedImage: any, isSelected: any) => {
    if (isSelected) {
      setSelectedImages([...selectedImages, selectedImage]);
    } else {
      setSelectedImages(
        selectedImages.filter(
          (img: SelectedImageInterface) => selectedImage.id !== img.id
        )
      );
    }
  };

  const handleDeleteImages = () => {
    let newImages = [...images];
    selectedImages.forEach((selectedImage: SelectedImageInterface) => {
      newImages = newImages.filter((img) => selectedImage.id !== img.id);
    });
    setImages(newImages);
    setSelectedImages([]);
    toast.success(handleDynamicToastMsg(selectedImages.length));
  };

  return (
    <section className={GALLERY_CONTAINER_STYLES}>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">Gallery</h2>
        <div className="flex justify-between items-center">
          <h2 className="text-base font-medium text-gray-500">
            {handleNumericalCasesInWordsForImages(selectedImages.length)}
          </h2>
          {selectedImages.length > 0 ? (
            <Button title="DELETE" onClick={handleDeleteImages} />
          ) : null}
        </div>
      </div>
      <div className="p-4">
        {images.length > 0 ? (
          <div className={GALLERY_GRID_STYLES} ref={dropRef}>
            {images.map((img) => (
              <ImageCard
                key={img.id}
                img={img}
                findImage={findImage}
                moveImage={moveImage}
                handleImageSelection={handleImageSelection}
              />
            ))}
            <ImageUploader />
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
