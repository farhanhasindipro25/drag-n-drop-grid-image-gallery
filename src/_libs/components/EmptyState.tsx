"use client";
import React from "react";
import toast from "react-hot-toast";

export default function EmptyState() {
  return (
    <div className="min-h-screen flex-col flex items-center justify-center gap-2">
      <h1 className="font-medium text-gray-700">
        No image found in the gallery.{" "}
      </h1>
      <div
        className="border border-violet-600 rounded-md bg-violet-100 cursor-pointer px-4 py-2"
        onClick={() => {
          window.location.reload();
          toast.success("Images data retrieved");
        }}
      >
        Retrieve Data
      </div>
    </div>
  );
}
