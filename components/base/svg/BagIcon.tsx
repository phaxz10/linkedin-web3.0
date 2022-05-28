import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const BagIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 4V3C15 1.3 13.7 0 12 0H8C6.3 0 5 1.3 5 3V4H0V8C0 9.7 1.3 11 3 11H17C18.7 11 20 9.7 20 8V4H15ZM7 3C7 2.4 7.4 2 8 2H12C12.6 2 13 2.4 13 3V4H7V3ZM17 12C18.2 12 19.3 11.5 20 10.6V15C20 16.7 18.7 18 17 18H3C1.3 18 0 16.7 0 15V10.6C0.7 11.5 1.8 12 3 12H17Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default BagIcon