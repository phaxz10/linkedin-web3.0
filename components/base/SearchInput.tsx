import classNames from 'classnames'
import * as React from 'react'
import { SearchIcon } from '.'

export type SearchInputProps = {
  variant?: 'outline' | 'solid'
  id: string
  onChange?: (val: string) => void
} & Omit<JSX.IntrinsicElements['input'], 'onChange'>

const SearchInput = ({
  className,
  placeholder,
  onChange,
  variant = 'outline',
  id,
  ...props
}: SearchInputProps) => {
  return (
    <div
      className={classNames(
        'flex items-center',
        className,
        { 'border border-black': variant === 'outline' },
        {
          'flex-row-reverse bg-[#EEF3F8]': variant === 'solid',
        }
      )}
    >
      <input
        id={id}
        placeholder="Search"
        className="mr-4 h-full w-full bg-transparent px-2 outline-none focus:outline-none"
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
      />
      <label htmlFor={id}>
        <SearchIcon className="w-5" />
      </label>
    </div>
  )
}

export default SearchInput

// DECLARE DEFAULT VALUES HERE

SearchInput.defaultProps = {
  className: 'p-2',
}
