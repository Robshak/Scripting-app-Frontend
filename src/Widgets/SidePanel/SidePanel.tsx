"use client";

import styles from "./SidePanel.module.scss";
import cn from "classnames";
import { determinantToState, sidepanelStates, states } from "./State";
import { SidePanelProps } from "./SidePanel.props";
import { JSX, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SideButton from "./Components/SideButton/SideButton";

export default function SidePanel({
  className,
  ...props
}: SidePanelProps) {
  const path = usePathname();
  const [currentState, setCurrentState] = useState(
    sidepanelStates.hide
  );
  const [currentButton, setCurrentButton] = useState(0);

  useEffect(() => {
    const splitted = path.split("/");
    let determinant = "";

    if (splitted.length < 3) {
      return;
    }

    if (splitted.length > 3) {
      determinant = splitted[4];
    } else {
      determinant = splitted[2];
    }

    if (splitted[2] === "build") {
      determinant = splitted[2];
    }

    setCurrentState(determinantToState[determinant]?.state);
    setCurrentButton(determinantToState[determinant]?.button);
  }, [path]);

  if (path.split("/").length < 3) {
    return <></>;
  }

  return (
    <div
      className={cn(styles["background"], className, {
        [styles["hide"]]: currentState === sidepanelStates.hide,
      })}
      {...props}
    >
      {states[currentState].map((button, index): JSX.Element => {
        if (index == currentButton) {
          return (
            <SideButton
              key={index}
              button={button}
              active
              first={index == 0}
            />
          );
        } else {
          return (
            <SideButton
              key={index}
              button={button}
              first={index == 0}
            />
          );
        }
      })}
    </div>
  );
}
