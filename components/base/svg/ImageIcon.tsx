import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const VideoIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.25 0H3.25C2.45435 0 1.69129 0.316071 1.12868 0.87868C0.566071 1.44129 0.25 2.20435 0.25 3V13C0.25 13.7956 0.566071 14.5587 1.12868 15.1213C1.69129 15.6839 2.45435 16 3.25 16H17.25C18.0456 16 18.8087 15.6839 19.3713 15.1213C19.9339 14.5587 20.25 13.7956 20.25 13V3C20.25 2.20435 19.9339 1.44129 19.3713 0.87868C18.8087 0.316071 18.0456 0 17.25 0ZM18.25 13C18.2508 13.1316 18.2255 13.2621 18.1758 13.3839C18.126 13.5057 18.0527 13.6166 17.96 13.71L14.25 10L12.25 12L6.25 6L2.25 10V3C2.25 2.73478 2.35536 2.48043 2.54289 2.29289C2.73043 2.10536 2.98478 2 3.25 2H17.25C17.5152 2 17.7696 2.10536 17.9571 2.29289C18.1446 2.48043 18.25 2.73478 18.25 3V13ZM16.25 6C16.25 6.39556 16.1327 6.78224 15.9129 7.11114C15.6932 7.44004 15.3808 7.69638 15.0154 7.84776C14.6499 7.99913 14.2478 8.03874 13.8598 7.96157C13.4719 7.8844 13.1155 7.69392 12.8358 7.41421C12.5561 7.13451 12.3656 6.77814 12.2884 6.39018C12.2113 6.00222 12.2509 5.60009 12.4022 5.23463C12.5536 4.86918 12.81 4.55682 13.1389 4.33706C13.4678 4.1173 13.8544 4 14.25 4C14.7804 4 15.2891 4.21071 15.6642 4.58579C16.0393 4.96086 16.25 5.46957 16.25 6Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default VideoIcon
