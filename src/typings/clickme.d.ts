export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string | JSX.Element | JSX.Element[];
  disabled?: boolean;
  onClick?: (...args: unknown[]) => unknown;
  hoverType?: string;
  idleType?: string;
  clickType?: string;
  primaryBgColor?: string;
  primaryTextColor?: string;
  secondaryBgColor?: string;
  secondaryTextColor?: string;
}

export interface StylesOptions {
  style?: React.CSSProperties;
  hoverType?: string;
  idleType?: string;
  primaryBgColor?: string;
  primaryTextColor?: string;
  secondaryBgColor?: string;
  secondaryTextColor?: string;
}
