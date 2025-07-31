import { useEffect, useRef, useState } from "react";
import "./drop-down.styles.scss";
import { FaChevronDown } from "react-icons/fa6";

export interface DropdownProps {
  label: string;
  placeholder?: string;
  maxWidth: number;
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

function FocusableListItem(props: DropdownItem) {
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (props.isFocused && itemRef.current) {
      itemRef.current.focus();
    }
  }, [props.isFocused]);

  return (
    <li
      ref={itemRef}
      tabIndex={props.isFocused ? 0 : -1}
      className={`dropdown__option ${
        props.selectedOption?.value === props.item.value
          ? "dropdown__option--selected"
          : ""
      }`}
      role="option"
      aria-selected={
        props.selectedOption?.value === props.item.value ? true : false
      }
      onClick={() => {
        props.selectItem(props.item);
      }}
    >
      {props.item.label}
    </li>
  );
}

function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false);

  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(props.selectedItem || null);

  const itemIndex = props.options.findIndex(
    (option) => option.value === selectedOption?.value
  );
  const [focusIndex, setFocusIndex] = useState(itemIndex >= 0 ? itemIndex : 0);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the clicked element is outside the component's ref
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const selectItem = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    if (props.handleChange) {
      props.handleChange(option);
    }
    setOpen(false);
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (!open && event.key === "ArrowDown") {
      setOpen(true);
    }
  };

  const handleListKeyPress = (
    event: React.KeyboardEvent<HTMLUListElement>
  ): void => {
    if (open && event.key === "ArrowDown") {
      setFocusIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % props.options.length;
        return nextIndex;
      });
    }
    if (open && event.key === "ArrowUp") {
      setFocusIndex((prevIndex) => {
        const previousIndex =
          (prevIndex - 1 + props.options.length) % props.options.length;
        return previousIndex;
      });
    }
    if (open && event.key === "Enter") {
      const item = props.options[focusIndex];
      if (item) {
        selectItem({ label: item.label, value: item.value });
      }
    }
  };

  return (
    <div className="dropdown-container" ref={componentRef}>
      <div className="dropdown__label">{props.label}</div>
      <div className="dropdown__wrapper">
        <input
          id="dropdown__input"
          type="text"
          name="dropdown__input"
          placeholder={
            props.placeholder ? props.placeholder : "Select an option"
          }
          aria-haspopup="listbox"
          aria-label={props.label}
          className="dropdown__input"
          style={{
            maxWidth: props.maxWidth > 0 ? props.maxWidth + "px" : "100%",
          }}
          value={selectedOption ? selectedOption.label : ""}
          onClick={toggleDropdown}
          onKeyDown={handleKeyPress}
          readOnly
        />
        <FaChevronDown
          className={`dropdown__input-icon  ${
            open ? "dropdown__input-icon--open" : ""
          }`}
          style={{
            left:
              props.maxWidth > 0
                ? props.maxWidth - 32 + "px"
                : "calc(100% - 32px)",
          }}
          onClick={toggleDropdown}
        />
        {open && (
          <ul
            className={`dropdown__options ${
              open ? "dropdown__options--open" : ""
            }`}
            onKeyDown={handleListKeyPress}
          >
            {props.options.map((option, index) => (
              <FocusableListItem
                key={index}
                item={option}
                isFocused={index === focusIndex}
                selectedOption={selectedOption}
                selectItem={selectItem}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
