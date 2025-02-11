import styles from "./MiniProfile.module.scss";
import cn from "classnames";
import { MiniProfileProps } from "./MiniProfile.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import UserSummary from "../../Features/UserSummary/UserSummary";
import Social from "@/Entities/Social/Social";
import Contacts from "@/Entities/Contacts/Contacts";

export default function MiniProfile({
  className,
  ...props
}: MiniProfileProps) {
  const userData = useSelector(
    (state: RootState) => state.userDataSlice
  );

  return (
    <div className={cn(styles["mini-profile"], className)} {...props}>
      <UserSummary size="small" className="user-summary" />
      <Contacts
        size="small"
        phone={userData.phone as string}
        email={userData.email as string}
      />
      <Social
        facebook={userData.facebook as string}
        instagram={userData.instagram as string}
        twitter={userData.twitter as string}
      />
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["description"])}>
        {userData.description}
      </div>
    </div>
  );
}
