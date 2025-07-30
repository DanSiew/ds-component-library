export type ButtonType = "primary" | "secondary" | "tertiary";

export type ButtonMode = "reverse" | "default";

export type IconPosition = "left" | "right";

export type ButtonSize = "small" | "medium" | "large";

export type ButtonInputType = "button" | "submit";

export interface ButtonProps {
    /**
     * The type of button to be displayed
     */
    type: ButtonInputType;
    /**
     * Is this the principal call to action on the page?
     */
    buttonType: ButtonType;
    /**
     * How large should the button be?
     */
    size: ButtonSize;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional event to be passed to the onClick handler
     */
    event?: number | string;
    /**
     * Optional click handler
     */
    onClick?: (event: any) => void;
}
