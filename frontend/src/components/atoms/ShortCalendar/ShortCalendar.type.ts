export interface HistoryItem {
  end_date: string;
}

export interface ShortCalendarProps {
  endDate?:
    | {
        __typename?: "History";
        end_date?: Date | null;
      }[]
    | null;
}
