import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { ButtonComponent } from "./button/button.component";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: ButtonComponent,
    name: "ButtonComponent",
    meta: {
      selector: "app-button",
    },
  },
];
