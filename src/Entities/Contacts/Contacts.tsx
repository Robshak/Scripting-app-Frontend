import styles from "./Contacts.module.scss";
import cn from "classnames";
import { ContactsProps } from "./Contacts.props";
import { useTranslations } from "next-intl";

export default function Contacts({
  size,
  phone,
  email,
  className,
  ...props
}: ContactsProps) {
  const t = useTranslations("contacts");

  return (
    <div
      className={cn(styles["contacts"], className, {
        [styles["small-contacts"]]: size === "small",
        [styles["big-contacts"]]: size === "big",
      })}
      {...props}
    >
      <div className={cn(styles["field"])}>
        <span className={cn(styles["field-header"])}>
          {`${t("email")}: `}
        </span>
        <span className={cn(styles["field-body"])}>{email}</span>
      </div>
      <div className={cn(styles["field"])}>
        <span className={cn(styles["field-header"])}>{`${t(
          "phone"
        )}:`}</span>
        <span className={cn(styles["field-body"])}>{phone}</span>
      </div>
    </div>
  );
}
