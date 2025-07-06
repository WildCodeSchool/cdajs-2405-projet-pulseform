import type { MeQuery } from "@graphql/__generated__/schema";

export interface HomePageViewProps {
  isDesktop: boolean;
  user: MeQuery["me"] | null;
}
