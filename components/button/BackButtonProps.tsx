export type BackButtonProps = {
    width?: string,
    height?: string,
    flex?: string,
    padding?: string,
    margin?: string,
    minWidth?: string,
    maxHeight?: string,
    maxWidth?: string,
    minHeight?: string,
    activeColor?: string,
    disabledColor?: string,
    textPadding?: string,
    onClick?: () => any; 
    history?: { goBack: () => any } ,
    isEnabled?: any,
    text?: string,
    onClickArgs?:string | undefined
    ref?: any | undefined
}