export interface CustomBar {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

export interface DataFromApi {
  end_date: Date | string;
  program: {
    tags: {
      name: string;
    }[];
  };
}

export interface Data {
  month: string;
  flexibility: number;
  strength: number;
  cardio: number;
}
export interface userExercicesChartProps {
  end_date?: string | Date;
  program: {
    tags?: {
      name: string;
    }[];
  };
}
