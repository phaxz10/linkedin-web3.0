import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const WorkIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="-2 -2 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 7H11V11H7V7ZM7 18H11V14H7V18ZM0 11H4V7H0V11ZM0 18H4V14H0V18ZM0 4H4V0H0V4ZM14 11H18V7H14V11ZM14 0V4H18V0H14ZM7 4H11V0H7V4ZM14 18H18V14H14V18Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default WorkIcon
