import styles from "./MiniProfile.module.scss";
import cn from "classnames";
import { MiniProfileProps } from "./MiniProfile.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import SocialButton from "@/Atoms/SocialButton/SocialButton";
import Image from "next/image";

export default function MiniProfile({
  className,
  ...props
}: MiniProfileProps) {
  const personData = useSelector(
    (state: RootState) => state.settingsSlice.PersonData
  );

  return (
    <div className={cn(styles["mini-profile"], className)} {...props}>
      <div className={cn(styles["user-summary"])}>
        <Image
          width={80}
          height={80}
          src={personData.picture}
          alt="avatar"
          className={cn(styles["avatar"])}
        />
        <div className={cn(styles["name"])}>{personData.name}</div>
        <div className={cn(styles["real-name"])}>
          {personData.realName}
        </div>
      </div>
      <div className={cn(styles["contacts"])}>
        <div className={cn(styles["block"])}>
          <div className={cn(styles["field-header"])}>Email</div>
          <div className={cn(styles["field-value"])}>
            {personData.email}
          </div>
        </div>
        <div className={cn(styles["block"])}>
          <div className={cn(styles["field-header"])}>Phone</div>
          <div className={cn(styles["field-value"])}>
            {personData.phone}
          </div>
        </div>
      </div>
      <div className={cn(styles["social"])}>
        <SocialButton socialType="facebook" />
        <SocialButton socialType="instagram" />
        <SocialButton socialType="twitter" />
      </div>
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["description"])}>
        {personData.description}
      </div>
    </div>
  );
}
