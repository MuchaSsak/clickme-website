export interface InitialProps {
  disabled: boolean;
  hoverType: string;
  idleType: string;
  clickType: string;
  primaryBgColor: string;
  primaryTextColor: string;
  secondaryBgColor: string;
  secondaryTextColor: string;
  [key: string]: unknown;
}

interface ChangedProps {
  [key: string]: unknown;
}
export interface CreatorContextValue {
  initialProps: InitialProps;
  customizeOptions: ButtonOptions;
  setCustomizeOptions: React.Dispatch<React.SetStateAction<ButtonOptions>>;
  changedProps: ChangedProps;
  setChangedProps: React.Dispatch<React.SetStateAction<ChangedProps>>;
}
