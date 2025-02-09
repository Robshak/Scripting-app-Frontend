import styles from "./UserSummary.module.scss";
import cn from "classnames";
import Avatar from "@/Features/Avatar/Avatar";
import { UserSummaryProps } from "./UserSummary.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";

export default function UserSummary({
  size,
  avatarIsInput,
  className,
  ...props
}: UserSummaryProps) {
  const personData = useSelector(
    (state: RootState) =>
      state.settingsSlice.sections["PersonData"].fields
  );

  return (
    <div
      className={cn(styles["user-summary"], className, {
        [styles["small"]]: size === "small",
        [styles["big"]]: size === "big",
      })}
      {...props}
    >
      <Avatar
        className={cn(styles["avatar"])}
        isInput={avatarIsInput}
      />
      <div className={cn(styles["name"])}>
        {personData.name.value}
      </div>
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["real-name"])}>
        {personData.realName.value}
      </div>
    </div>
  );
}
