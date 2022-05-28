import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const ShareIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="-1 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 7L16.39 14H14L18 8H6C5.48519 7.98939 4.97333 8.0803 4.49367 8.26756C4.014 8.45481 3.57593 8.73473 3.20448 9.09133C2.83302 9.44793 2.53546 9.87421 2.32879 10.3458C2.12212 10.8175 2.0104 11.3252 2 11.84V12C1.99772 12.4208 2.06184 12.8392 2.19 13.24L3.12 16H1L0.27 13.78C0.0908939 13.1831 -6.61168e-05 12.5632 3.60573e-08 11.94C0.0158096 10.3591 0.654923 8.84837 1.77843 7.73609C2.90194 6.62382 4.41904 5.99992 6 6H18L14 0H16.39L21 7Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default ShareIcon
