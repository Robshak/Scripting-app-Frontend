import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./ConfirmPopup.module.scss";
import { ConfirmPopupProps } from "./ConfirmPopup.props";

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

  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({
    // По умолчанию, чтобы при первом появлении не было скачка
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

  const handleTriggerClick = () => {
    if (!isOpen) openPopup();
    else closePopup();
  };

  useLayoutEffect(() => {
    if (isOpen && triggerRef.current && popupRef.current) {
      // Сначала выставляем попап за экран, чтобы он не мигал
      setPopupStyle((prev) => ({
        ...prev,
        top: "-9999px",
        left: "-9999px",
      }));

      // Дожидаемся следующего кадра, чтобы браузер успел отрендерить попап
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
