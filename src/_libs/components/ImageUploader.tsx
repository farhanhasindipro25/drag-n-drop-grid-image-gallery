import React from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";

export default function ImageUploader() {
  return (
    <>
      <label
        id="add-image"
        htmlFor="add-image"
        className="flex flex-col items-center justify-center w-full h-full p-6 border-2 border-dashed rounded-lg cursor-pointer border-gray-300"
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <PhotoIcon className="w-10 h-10 rounded-lg text-gray-300" />
          <div className="space-y-1">
            <p className="text-sm sm:text-base font-semibold text-gray-700 text-center">
              Add Image
            </p>
            <input type="file" className="hidden" />
          </div>
        </div>
      </label>
    </>
  );
}
