import styles from "./TopNav.module.scss";
import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import { TopNavProps, TopNavSection } from "./TopNav.props";
import { useWindowWidth } from "@/Shared/hooks/useWindowWidth";

export default function TopNav({
  sections,
  defaultSection,
  className,
  ...props
}: TopNavProps) {
  const [currentSection, setCurrentSection] =
    useState(defaultSection);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (currentSection === "" && sections.length > 0) {
      setCurrentSection(sections[0].name);
    }
  }, [currentSection, sections]);

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
  }, [currentSection, sections, windowWidth]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const onClickHandle = (section: TopNavSection) => {
    if (isAnimating) return;
    if (currentSection !== section.name) {
      setCurrentSection(section.name);
      setIsAnimating(true);
      section.onClick();
    }
  };

  if (sections.length === 0) return null;

  return (
    <nav className={cn(styles["top-panel"], className)} {...props}>
      <div
        className={cn(styles["nav-indicator"], {
          [cn(styles["animating"])]: isAnimating,
        })}
        style={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
      />
      {sections.map((section) => {
        return (
          <button
            ref={(el) => {
              buttonRefs.current[section.name] = el;
            }}
            key={section.name}
            className={cn(styles["section"], {
              [cn(styles["active"])]: currentSection === section.name,
            })}
            onClick={() => onClickHandle(section)}
          >
            {section.name}
          </button>
        );
      })}
    </nav>
  );
}
