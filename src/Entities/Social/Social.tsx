import styles from "./Social.module.scss";
import cn from "classnames";
import SocilaButton from "@/Shared/SocialButton/SocialButton";
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
      {facebook ? <SocilaButton socialType="facebook" /> : <></>}
      {instagram ? <SocilaButton socialType="instagram" /> : <></>}
      {twitter ? <SocilaButton socialType="twitter" /> : <></>}
    </div>
  );
}
