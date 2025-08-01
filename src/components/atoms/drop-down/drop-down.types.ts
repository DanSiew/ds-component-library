export interface DropdownProps {
    label: string;
    name: string;
    placeholder?: string;
    maxWidth: number;
    required: boolean;
    options: { label: string; value: string }[];
    selectedItem?: { label: string; value: string } | null;
    handleChange?: (option: { label: string; value: string }) => void;
}

export interface DropdownItem {
    item: { label: string; value: string };
    isFocused: boolean;
    selectedOption: { label: string; value: string } | null;
    selectItem: (option: { label: string; value: string }) => void;
}