import clsx from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...classnames: string[]) {
  return twMerge(clsx(classnames));
}
