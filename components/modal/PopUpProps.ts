export type PopUpProps = {
    justifyContent?: string,
    heading?: any | undefined,
    bodyText?: any | undefined,
    onSecondaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    onBackClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    icon?:any,
    onCloseClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    children?: React.ReactNode,
    secondaryText?:any,
    onPrimaryClick?: (event: React.MouseEvent<HTMLDivElement> | undefined ) => void,
    primaryText?:any,
    height?: string | undefined,
    // component?: React.ReactNode
}