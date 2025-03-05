import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TagConstructorProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  tagName: string;
  tagColor: string;
  onChangeName: (name: string) => void;
  onChangeColor: (color: string) => void;
}
