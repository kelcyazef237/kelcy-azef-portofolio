export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  id?: string;
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  designation: string;
  company: string;
  image: string;
} & Required<Pick<TCommonProps, "name">>;

export type THobby = {
  id?: string;
  hobby: string;
  description: string;
  emoji: string;
  color: string;
  tags: string[];
};

export type TProject = {
  id?: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  id?: string;
} & Required<Omit<TCommonProps, "title">>;

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = {
  id?: string;
} & Required<Omit<TCommonProps, "name">>;

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};
