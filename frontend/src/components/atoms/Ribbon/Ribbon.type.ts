export interface RibbonProps {
  endDate?: {
    __typename?: "History";
    end_date?: Date | null;
  }[];
}

export interface HistoryItem {
  end_date?: string | Date | null;
}
