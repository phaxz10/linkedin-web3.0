import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const RibbonIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="-3.5 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 0.5H2C1.60218 0.5 1.22064 0.658035 0.93934 0.93934C0.658035 1.22064 0.5 1.60218 0.5 2V22.46L8 17.42L15.5 22.46V2C15.5 1.60218 15.342 1.22064 15.0607 0.93934C14.7794 0.658035 14.3978 0.5 14 0.5Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default RibbonIcon
