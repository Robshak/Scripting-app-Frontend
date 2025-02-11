import styles from "./UserSummary.module.scss";
import cn from "classnames";
import { UserSummaryProps } from "./UserSummary.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import Avatar from "./Components/Avatar/Avatar";

export default function UserSummary({
  size,
  avatarIsInput,
  className,
  ...props
}: UserSummaryProps) {
  const userData = useSelector(
    (state: RootState) => state.userDataSlice
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
      <div className={cn(styles["name"])}>{userData.name}</div>
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["real-name"])}>
        {userData.realName}
      </div>
    </div>
  );
}
