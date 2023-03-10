export type ButtonProps = {
    id?: string | undefined,
    name?: string | undefined,
    text?: string | undefined,
    buttonRef?: any | undefined,
    delay?: any | undefined,
    automationId?: string,
    autoFocus?: any | undefined,
    width?: string | undefined,
    height?: string | undefined,
    flex?: string | undefined,
    padding?: string | undefined,
    margin?: string | undefined,
    minWidth?: string | undefined,
    maxHeight?: string | undefined,
    maxWidth?: string | undefined,
    minHeight?: string | undefined,
    isEnabled?: boolean | undefined,
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    ref?: () => string | undefined,
    history?: { goBack: () => any } | undefined,
    activeColor?: string | undefined,
    disabledColor?: string | undefined,
    activeBackgroundColor?: string | undefined,
    disabledBackgroundColor?: string | undefined,
    fontSize?: string | undefined,
    borderRadius?: string | undefined,
    border?: string | undefined,
    borderTop?: string | undefined,
    borderBottom?: string | undefined,
    borderLeft?: string | undefined,
    borderRight?: string | undefined,
    activeBorderColor?: string | undefined,
    disabledBorderColor?: string | undefined,
    position?: string | undefined,
    backgroundImageUrl?: string | undefined,
    boxShadow?: string | undefined,
    focusWidth?: string | undefined,
    focusHeight?: string | undefined,
    focusFlex?: string | undefined,
    focusPadding?: string | undefined,
    focusMargin?: string | undefined,
    focusBackgroundColor?: string | undefined,
    focusColor?: string | undefined,
    focusBorderColor?: string | undefined,
    focusBorderRadius?: string | undefined,
    focusCursor?: string | undefined,
    focusBoxShadow?: string | undefined,
    activeOpacity?: string | undefined,
    fontWeight?: any | undefined,
    showSpinner?: boolean | undefined,
    onClickArgs?: (event: React.MouseEvent<HTMLDivElement> | undefined) => void,
    spinnerSize?: string | undefined,
    children?: React.ReactNode
    iconScale?: string | undefined,
    focusBackground?: string | undefined,
    iconUrl?: string | undefined
    textPadding?: string | undefined
    display: string,
    flexWrap: string,
    alignItems: string,
    backgroundImage: string,
    backgroundColor: string,
    hoverBackgroundColor:string,
    cursor: string,
    imageHeight: string,
    imageWidth: string,
    objectFit:string,
    src: string,
    onSecondaryClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    secondaryText?: string,
    onPrimaryClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
    primaryText?: string
}