"use client";
import React from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ChildrenProps } from "../interfaces/Childrenprops";

export default function DragAndDropProvider({ children }: ChildrenProps) {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
