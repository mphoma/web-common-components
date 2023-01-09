export type PopUpProps = {
    justifyContent?: string,
    heading?: [],
    bodyText?: [],
    onSecondaryClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    component?: any,
    onBackClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    icon?:any,
    onCloseClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    children?: React.ReactNode,
    secondaryText?:any,
    onPrimaryClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    primaryText?:any,
}