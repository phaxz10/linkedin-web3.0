import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const BagIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.75 0H3.75C2.95435 0 2.19129 0.316071 1.62868 0.87868C1.06607 1.44129 0.75 2.20435 0.75 3V13C0.75 13.7956 1.06607 14.5587 1.62868 15.1213C2.19129 15.6839 2.95435 16 3.75 16H17.75C18.5456 16 19.3087 15.6839 19.8713 15.1213C20.4339 14.5587 20.75 13.7956 20.75 13V3C20.75 2.20435 20.4339 1.44129 19.8713 0.87868C19.3087 0.316071 18.5456 0 17.75 0ZM8.75 12V4L14.75 8L8.75 12Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default BagIcon
