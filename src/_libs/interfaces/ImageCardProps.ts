export interface ImageCardProps {
  img: {
    id: number;
    src: string;
  };
  findImage: (id: string) => {
    image: { id: number; src: string };
    index: number;
  };
  moveImage: (id: string, atIndex: number) => void;
}
