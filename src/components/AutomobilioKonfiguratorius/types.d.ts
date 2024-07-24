export type Option = {
  title: string;
  price: number;
  code?: string;
};

export type Category = {
  title: string;
  options: Option[];
  col_span: number;
  type: "single" | "multiple";
};
