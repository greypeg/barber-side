import { Icon } from "../icon"

export type CustomIconType = {
    size?: string
};


export const AnalyticsIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <g clip-path="url(#clip0_3_10)">
            <path d="M1.5 1.5V21.75C1.5 21.9489 1.57902 22.1397 1.71967 22.2803C1.86032 22.421 2.05109 22.5 2.25 22.5H22.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.3125 10.5H5.4375C4.91973 10.5 4.5 10.9197 4.5 11.4375V18.5625C4.5 19.0803 4.91973 19.5 5.4375 19.5H7.3125C7.83027 19.5 8.25 19.0803 8.25 18.5625V11.4375C8.25 10.9197 7.83027 10.5 7.3125 10.5Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.0625 8.25H12.1875C11.6697 8.25 11.25 8.66973 11.25 9.1875V18.5625C11.25 19.0803 11.6697 19.5 12.1875 19.5H14.0625C14.5803 19.5 15 19.0803 15 18.5625V9.1875C15 8.66973 14.5803 8.25 14.0625 8.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20.7956 5.25H18.9206C18.4029 5.25 17.9831 5.66973 17.9831 6.1875V18.5625C17.9831 19.0803 18.4029 19.5 18.9206 19.5H20.7956C21.3134 19.5 21.7331 19.0803 21.7331 18.5625V6.1875C21.7331 5.66973 21.3134 5.25 20.7956 5.25Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
            <clipPath id="clip0_3_10">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </Icon >
);