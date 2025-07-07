import type { MeQuery } from "@graphql/__generated__/schema";

export interface DashBoardViewprops {
  user: MeQuery["me"] | null;
  isDesktop: boolean;
}
