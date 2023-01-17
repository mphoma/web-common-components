export type PopUpProps = {
    justifyContent?: string,
    heading?: [],
    bodyText?: [],
    onSecondaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    onBackClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    icon?: string,
    onCloseClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    children?: React.ReactNode,
    secondaryText?:any,
    onPrimaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    primaryText?:any,
    height?: string | undefined,
    onClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    component?: React.ReactNode
}