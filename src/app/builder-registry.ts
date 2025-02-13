import type { RegisteredComponent } from "@builder.io/sdk-angular";
import { ButtonComponent } from "./button/button.component";
import { MatButton } from "../../dist/builder-angular-design-sys/browser/chunk-DNQKDW5C";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: ButtonComponent,
    name: "ButtonComponent",
    meta: {
      selector: "app-button",
    },
  },
  {
    component: MatButton,
    name: "MatButton",
  },
];
