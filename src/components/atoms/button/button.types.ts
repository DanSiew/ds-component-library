export type ButtonType = 'primary' | 'secondary' | 'tertiary';


export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  buttonType: ButtonType;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
