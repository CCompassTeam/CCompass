import { useState, useRef, useEffect } from 'react';
import {
  Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button,
} from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function DropdownInput({ options }: { options : string[] }) {
  const [selectedKey, setSelectedKeys] = useState(null);
  const [menuWidth, setMenuWidth] = useState(100);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleSelection = (key:any) => {
    setSelectedKeys(key);
  };

  useEffect(() => {
    if (triggerRef.current) {
      setMenuWidth(triggerRef.current.offsetWidth);
    }
  }, []);

  return (
    <Dropdown className="rounded-sm">
      <DropdownTrigger>
        <Button
          ref={triggerRef}
          className="w-full outline-gray-300 bg-white rounded-sm text-left relative"
        >
          {selectedKey || 'Choose an option'}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Single selection example"
        className="bg-white rounded-sm"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKey ? new Set([selectedKey]) : new Set()}
        onAction={handleSelection}
        style={{ width: menuWidth }}
      >
        {options.map((option) => (
          <DropdownItem key={option} className="rounded-sm">
            {' '}
            {option}
            {' '}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
