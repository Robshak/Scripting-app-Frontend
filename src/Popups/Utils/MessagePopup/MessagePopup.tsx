import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import { MessagePopupProps } from "./MessagePopup.props";
import styles from "./MessagePopup.module.scss";
import { usePopupPosition } from "@/Shared/hooks/usePopupPosition";

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

  const popupStyle = usePopupPosition(triggerRef, popupRef, {
    position,
    isOpen: isOpen || closing,
    offset: 5,
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
