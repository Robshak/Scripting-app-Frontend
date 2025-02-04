import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
