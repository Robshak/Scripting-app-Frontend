import UserSummary from "@/Widgets/UserSummary/UserSummary";
import styles from "./ProfileLeft.module.scss";
import cn from "classnames";
import Contacts from "@/Entities/Contacts/Contacts";
import Social from "@/Entities/Social/Social";
import MiniProfile from "@/Widgets/MiniProfile/MiniProfile";
import { useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { useTranslations } from "next-intl";

export default function ProfileLeft() {
  const t = useTranslations("profile");
  const personData = useSelector(
    (state: RootState) =>
      state.settingsSlice.sections["PersonData"].fields
  );

  return (
    <div className={cn(styles["left-part"])}>
      <UserSummary
        size="big"
        avatarIsInput={true}
        className="user-summary"
      />
      <div className={cn(styles["contacts"])}>
        <h1 className={cn(styles["header"])}>{t("contacts")}</h1>
        <Contacts
          size="big"
          phone={personData.phone.value as string}
          email={personData.email.value as string}
        />
        <Social
          facebook={personData.facebook.value as string}
          instagram={personData.instagram.value as string}
          twitter={personData.twitter.value as string}
          className={cn(styles["social-none"])}
        />
        <Social
          facebook={personData.facebook.value as string}
          instagram={personData.instagram.value as string}
          twitter={personData.twitter.value as string}
          className={cn(styles["social"])}
        />
      </div>
      <div className={cn(styles["mini-profile"])}>
        <h1>{t("miniProfile")}</h1>
        <MiniProfile />
      </div>
    </div>
  );
}
