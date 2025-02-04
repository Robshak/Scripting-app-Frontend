import styles from "./CustomLink.module.scss";
import cn from "classnames";
import Link from "next/link";
import { CustomLinkProps } from "./CustomLink.props";

export default function CustomLink({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link className={cn(styles["link"], className)} {...props}>
      {children}
    </Link>
  );
}
