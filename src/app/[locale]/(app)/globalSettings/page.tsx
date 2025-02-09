"use client";

import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.scss";
import cn from "classnames";
import SettingsField from "@/Components/SettingsField/SettingsField";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { selectSection } from "@/Store/Slices/settingsSlice";

export default function GlobalSettings() {
  const currentSection = useSelector(
    (state: RootState) => state.settingsSlice.currentSectionId
  );
  const sections = useSelector(
    (state: RootState) => state.settingsSlice.sections
  );
  const dispatch = useDispatch();

  // for indicator animation
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>(
    {}
  );
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const activeButton = buttonRefs.current[currentSection];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [currentSection, sections]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const onClickHandle = (sectionId: string) => {
    if (currentSection !== sectionId) {
      setIsAnimating(true);
      dispatch(selectSection(sectionId));
    }
  };

  return (
    <>
      <nav className={cn(styles["top-panel"])}>
        <div
          className={cn(styles["nav-indicator"], {
            [styles["animating"]]: isAnimating,
          })}
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />
        {Object.keys(sections).map((sectionId) => {
          const section = sections[sectionId];
          return (
            <button
              ref={(el) => {
                buttonRefs.current[section.id] = el;
              }}
              key={section.name}
              className={cn(styles["section"], {
                [styles["active"]]: currentSection === section.id,
              })}
              onClick={() => onClickHandle(section.id)}
            >
              {section.name}
            </button>
          );
        })}
      </nav>
      <main className={cn(styles["main"])}>
        {Object.keys(sections[currentSection].fields).map(
          (fieldId) => {
            const field = sections[currentSection].fields[fieldId];
            return (
              <SettingsField
                key={field.id}
                field={field}
                sectionId={currentSection}
              />
            );
          }
        )}
      </main>
    </>
  );
}
