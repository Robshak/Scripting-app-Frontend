import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { MessagePopupProps } from "./MessagePopup.props";
import styles from "./MessagePopup.module.scss";

export default function MessagePopup({
  text,
  position = "bottom",
  trigger,
  className,
  animated = false,
  temporary = false,
}: MessagePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const popupRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    zIndex: 9999,
  });

  const openPopup = () => {
    setClosing(false);
    setIsOpen(true);
  };

  const closePopup = () => {
    if (!isOpen || closing) return;
    if (!animated) {
      setIsOpen(false);
    } else {
      setClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setClosing(false);
      }, 300);
    }
  };

  const onTriggerClick = () => {
    if (!isOpen) {
      openPopup();
    } else {
      closePopup();
    }
  };

  useEffect(() => {
    if (isOpen && triggerRef.current && popupRef.current) {
      setPopupStyle((prev) => ({
        ...prev,
        top: "-9999px",
        left: "-9999px",
      }));
      requestAnimationFrame(() => {
        if (!triggerRef.current || !popupRef.current) return;
        const triggerRect =
          triggerRef.current.getBoundingClientRect();
        const popupRect = popupRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        switch (position) {
          case "top":
            top = triggerRect.top - popupRect.height - 5;
            left =
              triggerRect.left +
              (triggerRect.width - popupRect.width) / 2;
            break;
          case "bottom":
            top = triggerRect.bottom + 5;
            left =
              triggerRect.left +
              (triggerRect.width - popupRect.width) / 2;
            break;
          case "left":
            top =
              triggerRect.top +
              (triggerRect.height - popupRect.height) / 2;
            left = triggerRect.left - popupRect.width - 5;
            break;
          case "right":
            top =
              triggerRect.top +
              (triggerRect.height - popupRect.height) / 2;
            left = triggerRect.right + 5;
            break;
          default:
            top = triggerRect.bottom + 5;
            left =
              triggerRect.left +
              (triggerRect.width - popupRect.width) / 2;
        }

        setPopupStyle({
          position: "absolute",
          top: `${top}px`,
          left: `${left}px`,
          zIndex: 9999,
        });
      });
    }
  }, [isOpen, position]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const t = e.target as Node;
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(t) &&
        triggerRef.current &&
        !triggerRef.current.contains(t)
      ) {
        closePopup();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closing]);

  useEffect(() => {
    if (temporary && isOpen && !closing) {
      const timer = setTimeout(() => {
        closePopup();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [temporary, isOpen, closing]);

  return (
    <>
      {trigger && (
        <div
          ref={triggerRef}
          onClick={onTriggerClick}
          className={styles["trigger"]}
        >
          {trigger}
        </div>
      )}

      {(isOpen || closing) &&
        createPortal(
          <div
            ref={popupRef}
            style={popupStyle}
            className={cn(styles["popup"], className, {
              [styles["fadeIn"]]: animated && isOpen && !closing,
              [styles["fadeOut"]]: animated && closing,
            })}
          >
            {text}
          </div>,
          document.body
        )}
    </>
  );
}
