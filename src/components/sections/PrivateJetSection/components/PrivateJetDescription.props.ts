import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PrivateJetDescriptionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  side: "left" | "right";
  image: string;
}
