import styles from "./MiniProfile.module.scss";
import cn from "classnames";
import { MiniProfileProps } from "./MiniProfile.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import Image from "next/image";
import SocilaButton from "@/Atoms/SocialButton/SocialButton";

export default function MiniProfile({
  className,
  ...props
}: MiniProfileProps) {
  const personData = useSelector(
    (state: RootState) =>
      state.settingsSlice.sections["PersonData"].fields
  );

  return (
    <div className={cn(styles["mini-profile"], className)} {...props}>
      <div className={cn(styles["user-summary"])}>
        <Image
          width={80}
          height={80}
          src={personData.picture.value as string}
          alt="avatar"
          className={cn(styles["avatar"])}
        />
        <div className={cn(styles["name"])}>
          {personData.name.value}
        </div>
        <div className={cn(styles["real-name"])}>
          {personData.realName.value}
        </div>
      </div>
      <div className={cn(styles["contacts"])}>
        <div className={cn(styles["block"])}>
          <div className={cn(styles["field-header"])}>Email</div>
          <div className={cn(styles["field-value"])}>
            {personData.email.value}
          </div>
        </div>
        <div className={cn(styles["block"])}>
          <div className={cn(styles["field-header"])}>Phone</div>
          <div className={cn(styles["field-value"])}>
            {personData.phone.value}
          </div>
        </div>
      </div>
      <div className={cn(styles["social"])}>
        {personData.facebook.value ? (
          <SocilaButton socialType="facebook" />
        ) : (
          <></>
        )}
        {personData.instagram.value ? (
          <SocilaButton socialType="instagram" />
        ) : (
          <></>
        )}
        {personData.twitter.value ? (
          <SocilaButton socialType="twitter" />
        ) : (
          <></>
        )}
      </div>
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["description"])}>
        {personData.description.value}
      </div>
    </div>
  );
}
