export type Schedules = {
  startDate: Date;
  endDate?: Date;
  color?: string;
  content?: string;
  [key: string]: any;
}[];

export type DateItem = {
  isPrevMonth?: boolean;
  isNextMonth?: boolean;
  isCurMonth?: boolean;
  value: number;
  date: Date;
  events?: Schedules;
};
