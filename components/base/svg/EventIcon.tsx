import * as React from 'react'
import classNames from 'classnames'

type Props = {
  className?: string
} & JSX.IntrinsicElements['path']

const EventIcon = ({ className, ...props }: Props) => (
  <div className={classNames(className)}>
    <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.25 0V15C0.25 15.7956 0.566071 16.5587 1.12868 17.1213C1.69129 17.6839 2.45435 18 3.25 18H15.25C16.0456 18 16.8087 17.6839 17.3713 17.1213C17.9339 16.5587 18.25 15.7956 18.25 15V0H0.25ZM13.25 1.75C13.4972 1.75 13.7389 1.82331 13.9445 1.96066C14.15 2.09801 14.3102 2.29324 14.4049 2.52165C14.4995 2.75005 14.5242 3.00139 14.476 3.24386C14.4277 3.48634 14.3087 3.70907 14.1339 3.88388C13.9591 4.0587 13.7363 4.17775 13.4939 4.22598C13.2514 4.27421 13.0001 4.24946 12.7716 4.15485C12.5432 4.06024 12.348 3.90002 12.2107 3.69446C12.0733 3.4889 12 3.24723 12 3C12 2.66848 12.1317 2.35054 12.3661 2.11612C12.6005 1.8817 12.9185 1.75 13.25 1.75ZM5.25 1.75C5.49723 1.75 5.7389 1.82331 5.94446 1.96066C6.15002 2.09801 6.31024 2.29324 6.40485 2.52165C6.49946 2.75005 6.52421 3.00139 6.47598 3.24386C6.42775 3.48634 6.3087 3.70907 6.13388 3.88388C5.95907 4.0587 5.73634 4.17775 5.49386 4.22598C5.25139 4.27421 5.00005 4.24946 4.77165 4.15485C4.54324 4.06024 4.34801 3.90002 4.21066 3.69446C4.07331 3.4889 4 3.24723 4 3C4 2.66848 4.1317 2.35054 4.36612 2.11612C4.60054 1.8817 4.91848 1.75 5.25 1.75ZM16.25 15C16.25 15.2652 16.1446 15.5196 15.9571 15.7071C15.7696 15.8946 15.5152 16 15.25 16H3.25C2.98478 16 2.73043 15.8946 2.54289 15.7071C2.35536 15.5196 2.25 15.2652 2.25 15V6H16.25V15ZM10.35 12C10.35 11.7348 10.2446 11.4804 10.0571 11.2929C9.86957 11.1054 9.61522 11 9.35 11H9.25C8.90795 11.0114 8.57011 11.0789 8.25 11.2L7.25 11V8H11.15V9H8.25V10.15C8.59098 10.0498 8.94461 9.99931 9.3 10C9.54829 9.98513 9.79708 10.0194 10.0321 10.1009C10.2671 10.1824 10.4837 10.3094 10.6695 10.4748C10.8553 10.6402 11.0067 10.8406 11.1149 11.0646C11.2231 11.2885 11.286 11.5317 11.3 11.78V12C11.3107 12.2522 11.2716 12.504 11.1849 12.7411C11.0982 12.9781 10.9656 13.1958 10.7947 13.3815C10.6238 13.5673 10.418 13.7175 10.1889 13.8237C9.95991 13.9298 9.71221 13.9897 9.46 14H9.25C8.75277 14.0329 8.26281 13.8671 7.88779 13.539C7.51277 13.2108 7.28337 12.7472 7.25 12.25C7.23954 12.167 7.23954 12.083 7.25 12H8.25C8.23189 12.1356 8.24528 12.2735 8.28913 12.4031C8.33298 12.5327 8.40611 12.6504 8.50284 12.7472C8.59957 12.8439 8.7173 12.917 8.84688 12.9609C8.97646 13.0047 9.11441 13.0181 9.25 13H9.35C9.4735 13.0081 9.59739 12.9918 9.71455 12.9519C9.83172 12.9121 9.93987 12.8495 10.0328 12.7677C10.1257 12.6859 10.2015 12.5866 10.256 12.4755C10.3104 12.3643 10.3424 12.2435 10.35 12.12V12Z"
        fill="currentColor"
        fillOpacity="0.9"
        {...props}
      />
    </svg>
  </div>
)

export default EventIcon