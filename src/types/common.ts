import { Beers } from './beer';

export interface queryParams {
  page: string | number;
  per_page?: number;
}

export interface HeadProps {
  title?: string;
  description?: string;
}

export interface MainLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export interface AppProviderProps {
  children: React.ReactNode;
}

export interface CardViewProps {
  data: Beers[];
}

export interface ButtonProps {
  image?: React.ReactNode;
  loading: boolean;
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  submit: () => void;
  classname?: string;
}

export interface TooltipsProps {
  title: string;
  children: React.ReactNode;
  position: string;
  container_class?: string;
  theme?: string;
}
