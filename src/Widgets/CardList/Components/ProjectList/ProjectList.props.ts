import { DetailedHTMLProps, HTMLAttributes } from "react";
import { ProjectList } from "../../CardList.props";

export interface InputFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  cardList: ProjectList;
}
