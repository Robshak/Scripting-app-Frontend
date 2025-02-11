import styles from "./Social.module.scss";
import cn from "classnames";
import SocialButton from "@/Shared/SocialButton/SocialButton";
import { SocialProps } from "./Social.props";

export default function Social({
  facebook,
  instagram,
  twitter,
  className,
  ...props
}: SocialProps) {
  return (
    <div className={cn(styles["social"], className)} {...props}>
      {facebook ? <SocialButton socialType="facebook" /> : <></>}
      {instagram ? <SocialButton socialType="instagram" /> : <></>}
      {twitter ? <SocialButton socialType="twitter" /> : <></>}
    </div>
  );
}
