import { Routes } from "@angular/router";

import { FigmaImportsPage } from "./components/figma-imports.component";


export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "figma-imports",
  },
  {
    path: "figma-imports",
    component: FigmaImportsPage,
  },
  {
    path: "dashboard",
    loadComponent: () =>
      import("./dashboard/dashboard.component").then(
        (c) => c.DashboardComponent
      ),
    title: "Dashboard",
  },
];
