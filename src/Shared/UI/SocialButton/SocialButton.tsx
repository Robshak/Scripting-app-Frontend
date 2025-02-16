import styles from "./SocialButton.module.scss";
import cn from "classnames";
import { SocialButtonProps, SocialType } from "./SocialButton.props";
import Facebook from "./icons/facebook.svg";
import Instagram from "./icons/instagram.svg";
import Twitter from "./icons/twitter.svg";
import { ReactNode } from "react";

const social: Record<SocialType, ReactNode> = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />,
};

export default function SocialButton({
  socialType,
  className,
  ...props
}: SocialButtonProps) {
  return (
    <button className={cn(styles["button"], className)} {...props}>
      {social[socialType]}
    </button>
  );
}
