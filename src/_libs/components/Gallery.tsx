"use client";
import React, { useState } from "react";
import { GALLERY_IMAGES } from "../statics/galleryImages";
import ImageCard from "./ImageCard";

export default function Gallery() {
  const [images, setImages] = useState(GALLERY_IMAGES);
  return (
    <section className="w-full border border-gray-300 rounded-lg bg-white divide-y divide-gray-300">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-700">Gallery</h2>
      </div>
      <div className="p-4">
        {images.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {images.map((img) => (
              <ImageCard key={img.id} img={img} />
            ))}
          </div>
        ) : (
          <div>
            <h1>No image found in the gallery. </h1>
          </div>
        )}
      </div>
    </section>
  );
}
