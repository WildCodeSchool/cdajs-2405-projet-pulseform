import type { MeQuery } from "@graphql/__generated__/schema";

export interface HistoryViewProps {
  user: MeQuery["me"] | null;
  isDesktop: boolean;
  handleHistoryView: () => void;
}
