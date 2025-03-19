import { useState, useLayoutEffect } from "react";

interface UsePopupPositionOptions {
  position: "top" | "bottom" | "left" | "right";
  isOpen: boolean;
  offset?: number;
}

/**
 * Хук для вычисления позиции попапа относительно элемента-триггера.
 * Автоматически переключается на противоположную сторону, если места не хватает.
 */
export function usePopupPosition(
  triggerRef: React.RefObject<HTMLElement | null>,
  popupRef: React.RefObject<HTMLElement | null>,
  { position, isOpen, offset = 5 }: UsePopupPositionOptions
) {
  const [popupStyle, setPopupStyle] = useState<React.CSSProperties>({
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    zIndex: 9999,
  });

  useLayoutEffect(() => {
    if (!isOpen || !triggerRef.current || !popupRef.current) return;

    // Сначала убираем попап за пределы экрана
    setPopupStyle((prev) => ({
      ...prev,
      top: "-9999px",
      left: "-9999px",
    }));

    // Ждём следующий кадр отрисовки
    requestAnimationFrame(() => {
      const triggerRect = triggerRef.current!.getBoundingClientRect();
      const popupRect = popupRef.current!.getBoundingClientRect();

      const scrollX = window.scrollX ?? window.pageXOffset;
      const scrollY = window.scrollY ?? window.pageYOffset;

      let effectivePosition = position;
      // Проверяем, хватает ли места в выбранном направлении
      if (
        position === "bottom" &&
        triggerRect.bottom + offset + popupRect.height >
          window.innerHeight
      ) {
        effectivePosition = "top";
      } else if (
        position === "top" &&
        triggerRect.top - offset - popupRect.height < 0
      ) {
        effectivePosition = "bottom";
      } else if (
        position === "left" &&
        triggerRect.left - offset - popupRect.width < 0
      ) {
        effectivePosition = "right";
      } else if (
        position === "right" &&
        triggerRect.right + offset + popupRect.width >
          window.innerWidth
      ) {
        effectivePosition = "left";
      }

      let top = 0;
      let left = 0;

      switch (effectivePosition) {
        case "top":
          top = triggerRect.top + scrollY - popupRect.height - offset;
          left =
            triggerRect.left +
            scrollX +
            (triggerRect.width - popupRect.width) / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + scrollY + offset;
          left =
            triggerRect.left +
            scrollX +
            (triggerRect.width - popupRect.width) / 2;
          break;
        case "left":
          top =
            triggerRect.top +
            scrollY +
            (triggerRect.height - popupRect.height) / 2;
          left =
            triggerRect.left + scrollX - popupRect.width - offset;
          break;
        case "right":
          top =
            triggerRect.top +
            scrollY +
            (triggerRect.height - popupRect.height) / 2;
          left = triggerRect.right + scrollX + offset;
          break;
        default:
          top = triggerRect.bottom + scrollY + offset;
          left =
            triggerRect.left +
            scrollX +
            (triggerRect.width - popupRect.width) / 2;
      }

      setPopupStyle({
        position: "absolute",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: 9999,
      });
    });
  }, [isOpen, position, offset, triggerRef, popupRef]);

  return popupStyle;
}
