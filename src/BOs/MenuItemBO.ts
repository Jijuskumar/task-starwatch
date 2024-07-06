import { FC, SVGProps } from "react";

export interface MenuItemBO {
  icon: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  name: string;
  navigateTo: string;
}
