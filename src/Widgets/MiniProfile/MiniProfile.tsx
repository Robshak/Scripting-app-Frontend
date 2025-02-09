import styles from "./MiniProfile.module.scss";
import cn from "classnames";
import { MiniProfileProps } from "./MiniProfile.props";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import UserSummary from "../UserSummary/UserSummary";
import Social from "@/Entities/Social/Social";
import Contacts from "@/Entities/Contacts/Contacts";

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
      <UserSummary size="small" className="user-summary" />
      <Contacts
        size="small"
        phone={personData.phone.value as string}
        email={personData.email.value as string}
      />
      <Social
        facebook={personData.facebook.value as string}
        instagram={personData.instagram.value as string}
        twitter={personData.twitter.value as string}
      />
      <div className={cn(styles["divider"])} />
      <div className={cn(styles["description"])}>
        {personData.description.value}
      </div>
    </div>
  );
}
