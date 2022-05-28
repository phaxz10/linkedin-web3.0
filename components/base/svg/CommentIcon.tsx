import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const CommentIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 -3 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 5H16V6H6V5ZM6 9H13V8H6V9ZM22 7C22.0148 8.09493 21.7643 9.17716 21.2697 10.1541C20.7751 11.1311 20.0512 11.9738 19.16 12.61L11 18V14H7C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 2.76642e-08 7 0H15C16.8565 0 18.637 0.737498 19.9497 2.05025C21.2625 3.36301 22 5.14348 22 7ZM20 7C20 5.67392 19.4732 4.40215 18.5355 3.46447C17.5979 2.52678 16.3261 2 15 2H7C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7C2 8.32608 2.52678 9.59785 3.46447 10.5355C4.40215 11.4732 5.67392 12 7 12H13V14.28L18 11C18.6336 10.5463 19.1469 9.94478 19.4955 9.24774C19.844 8.55069 20.0172 7.77913 20 7Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default CommentIcon
