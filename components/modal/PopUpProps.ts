export type PopUpProps = {
    justifyContent?: string,
    heading?: any | undefined,
    bodyText?: [],
    onSecondaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    component?: any,
    onBackClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    icon?:any,
    onCloseClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    children?: React.ReactNode,
    secondaryText?:any,
    onPrimaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    primaryText?:any,
}