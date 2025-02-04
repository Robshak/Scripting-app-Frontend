"use client";

import styles from "./SidePanel.module.scss";
import cn from "classnames";
import { sidepanelStates, states } from "./State";
import SideButton from "./SideButton/SideButton";
import { SidePanelProps } from "./SidePanel.props";
import { JSX } from "react";

export default function SidePanel({
  currentState,
  currentButton,
  className,
  ...props
}: SidePanelProps) {
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
