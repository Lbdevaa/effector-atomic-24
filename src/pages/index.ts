import { createRoutesView } from "atomic-router-react";
import { SignUpRoute } from "./sign-up";

export const Pages = createRoutesView({
  routes: [SignUpRoute],
});
