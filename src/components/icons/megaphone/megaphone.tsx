import { Icon } from "../icon"

export type CustomIconType = {
    size?: string
};


export const MegaphoneIcon: React.FC<CustomIconType> = ({ size = "24" }) => (
    <Icon size={size}>
        <path d="M19.1222 2.44782C19.1222 2.44782 15.0609 7.5 11.25 7.5H3.75C3.55109 7.5 3.36032 7.57902 3.21967 7.71967C3.07902 7.86033 3 8.05109 3 8.25V12.75C3 12.9489 3.07902 13.1397 3.21967 13.2803C3.36032 13.421 3.55109 13.5 3.75 13.5H11.25C15.0609 13.5 19.1222 18.5733 19.1222 18.5733C19.4063 18.9483 20.25 18.6914 20.25 18.1125V2.90625C20.25 2.32922 19.4531 2.02407 19.1222 2.44782Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M3 12C3 12 2.25 11.7188 2.25 10.5C2.25 9.28125 3 9 3 9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M21 11.5312C21 11.5312 21.75 11.3283 21.75 10.5C21.75 9.67172 21 9.46875 21 9.46875" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 7.5V13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.25 7.5V13.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.75 13.5V21.375C6.75 21.4745 6.78951 21.5698 6.85983 21.6402C6.93016 21.7105 7.02554 21.75 7.125 21.75H9.60938C9.72686 21.75 9.84272 21.7225 9.9476 21.6695C10.0525 21.6166 10.1435 21.5397 10.2132 21.4452C10.2829 21.3506 10.3295 21.241 10.3491 21.1252C10.3687 21.0093 10.3608 20.8905 10.3261 20.7783C9.93328 19.5183 9 18.0975 9 15.75H9.75C9.94891 15.75 10.1397 15.671 10.2803 15.5303C10.421 15.3897 10.5 15.1989 10.5 15V14.25C10.5 14.0511 10.421 13.8603 10.2803 13.7197C10.1397 13.579 9.94891 13.5 9.75 13.5H9" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Icon >
);