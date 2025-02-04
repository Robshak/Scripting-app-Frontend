"use client";

import { SideButtonProps } from "./SideButton.props";
import styles from "./SideButton.module.scss";
import cn from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SideButton({
  button,
  active,
  first,
  ...props
}: SideButtonProps) {
  const pathName = usePathname();
  const [resultPath, setResultPath] = useState("/");

  document.querySelector(`svg`)?.setAttribute("viewBox", "0 0 64 64");

  useEffect(() => {
    if (button.clearPath) {
      setResultPath(`/${button.goTo}`);
    } else {
      const splitted = pathName.split("/");
      let firstPart = "";

      for (let i = 0; i < splitted.length - 1; i++) {
        firstPart += splitted[i] + "/";
      }
      setResultPath(firstPart + button.goTo);
    }
  }, [button, pathName]);

  return (
    <div
      className={cn(styles["background"], {
        [styles["active"]]: active,
      })}
      {...props}
    >
      <Link href={resultPath}>
        <div
          className={cn(styles["img"], {
            [styles["first"]]: first,
            [styles["fill"]]: button.iconFill,
            [styles["stroke"]]: !button.iconFill,
          })}
        >
          {button.icon}
        </div>
      </Link>
    </div>
  );
}
