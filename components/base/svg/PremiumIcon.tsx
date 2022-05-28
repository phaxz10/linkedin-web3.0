import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const PremiumIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 0C0.684635 0.311186 0.433927 0.68167 0.262306 1.09013C0.0906846 1.49859 0.00153909 1.93695 0 2.38V13.62C0 14.5164 0.356106 15.3761 0.989979 16.01C1.62385 16.6439 2.48357 17 3.38 17H14.62C15.063 16.9985 15.5014 16.9093 15.9099 16.7377C16.3183 16.5661 16.6888 16.3154 17 16L1 0Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default PremiumIcon
