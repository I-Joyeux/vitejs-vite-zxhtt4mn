export interface Plane {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

export interface SectionProps {
  title: string;
  planes: Plane[];
  bgColor?: string;
}