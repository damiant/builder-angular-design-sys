// @ts-nocheck
import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { MatButton } from "~/dist/builder-angular-design-sys/browser/chunk-DNQKDW5C";

// ❖ mat-btn
interface FigmaMatBtnProps extends BaseFigmaProps {
  type?: "plain" | "rounded" | "outlined" | "text" | "tile";
  color?: "normal" | "primary" | "-";
  disabled?: "yes" | "no";
  size?: "normal" | "x-small" | "small" | "large" | "x-large";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "fe0206010ca9747baeda85d7197d0748008d9ab2",
  mapper(figma: FigmaMatBtnProps) {
    return <MatButton />;
  },
});
