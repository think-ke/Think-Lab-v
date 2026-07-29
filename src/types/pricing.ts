export interface PricingPlan {
  title: string;
  subtitle: string;
  button: string;
  highlighted?: boolean;
  sections: {
    title: string;
    items: string[];
  }[];
}