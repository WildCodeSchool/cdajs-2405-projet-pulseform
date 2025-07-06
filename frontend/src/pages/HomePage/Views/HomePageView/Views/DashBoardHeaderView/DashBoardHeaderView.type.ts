import type { MeQuery } from "@graphql/__generated__/schema";

export interface DashBoardHeaderViewProps {
  isDesktop: boolean;
  user: MeQuery["me"] | null;
}
