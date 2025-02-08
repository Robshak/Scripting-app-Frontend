export interface Tag {
  name: string;
  color: string;
}

export interface ProjectCard {
  picture: string;
  tags: Tag[];
  title: string;
  description: string;
}
