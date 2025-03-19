// Пример внутри ConfirmPopup
import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./ConfirmPopup.module.scss";
import { ConfirmPopupProps } from "./ConfirmPopup.props";
import { usePopupPosition } from "@/Shared/hooks/usePopupPosition";

export default function ConfirmPopup({
  text,
  position = "bottom",
  trigger,
  className,
  animated = false,
  agree,
  disagree,
}: ConfirmPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

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

  const handleTriggerClick = () => {
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
        (isOpen || closing) &&
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

  const handleAgreeClick = () => {
    agree?.onClick?.();
    closePopup();
  };

  const handleDisagreeClick = () => {
    disagree?.onClick?.();
    closePopup();
  };

  return (
    <>
      {trigger && (
        <div
          ref={triggerRef}
          onClick={handleTriggerClick}
          className={cn(styles["trigger"], className)}
        >
          {trigger}
        </div>
      )}

      {(isOpen || closing) &&
        createPortal(
          <div
            ref={popupRef}
            style={popupStyle}
            className={cn(styles["popup"], {
              [styles["fadeIn"]]: animated && isOpen && !closing,
              [styles["fadeOut"]]: animated && closing,
            })}
          >
            <div className={cn(styles["text"])}>{text}</div>
            <div className={cn(styles["buttons"])}>
              <button onClick={handleAgreeClick}>
                {agree?.text || "OK"}
              </button>
              <button onClick={handleDisagreeClick}>
                {disagree?.text || "Cancel"}
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
