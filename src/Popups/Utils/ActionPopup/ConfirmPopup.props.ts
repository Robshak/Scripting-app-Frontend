export interface PopupButton {
  text: string;
  onClick?: () => void;
}

export interface ConfirmPopupProps {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  trigger?: React.ReactNode;
  className?: string;
  animated?: boolean;
  agree: PopupButton;
  disagree: PopupButton;
}
