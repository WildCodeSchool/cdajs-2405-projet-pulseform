import type { MeQuery } from "@graphql/__generated__/schema";

export interface UserProfileViewProps {
  isDesktop: boolean;
  user: MeQuery["me"] | null;
}
