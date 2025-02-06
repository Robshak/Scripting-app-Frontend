import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type SocialType = "facebook" | "instagram" | "twitter";

export interface SocialButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  socialType: SocialType;
}
