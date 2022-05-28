import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const ArrowDownIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2 8.99003L19 0.680031C19.0204 0.664497 19.0343 0.642065 19.0393 0.616954C19.0443 0.591842 19.0399 0.565782 19.027 0.543671C19.0141 0.52156 18.9936 0.504922 18.9693 0.496886C18.945 0.48885 18.9186 0.489968 18.895 0.500032H1.10502C1.08148 0.489968 1.05508 0.48885 1.03078 0.496886C1.00647 0.504922 0.985942 0.52156 0.973044 0.543671C0.960146 0.565782 0.955769 0.591842 0.960737 0.616954C0.965704 0.642065 0.979674 0.664497 1.00002 0.680031L8.80002 8.99003C8.95426 9.15346 9.14025 9.28367 9.3466 9.37266C9.55295 9.46165 9.7753 9.50756 10 9.50756C10.2247 9.50756 10.4471 9.46165 10.6534 9.37266C10.8598 9.28367 11.0458 9.15346 11.2 8.99003Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default ArrowDownIcon
