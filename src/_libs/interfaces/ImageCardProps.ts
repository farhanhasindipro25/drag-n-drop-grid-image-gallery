export interface ImageCardProps {
  img: {
    id: string;
    src: string;
  };
  findImage: (id: string) => {
    image: { id: string; src: string };
    index: number;
  };
  moveImage: (id: string, atIndex: number) => void;

  handleImageSelection: any;
}
