import React from "react";
import { withFormFactor } from "../../hocs/withFormFactor";
import { FormFactorTypes } from "../../common/constants";
import { PopUpDesktop } from "./PopUpDesktop";
import { PopUpTablet } from "./PopUpTablet";
import { PopUpMobi } from "./PopUpMobi";
import { PopUpProps } from "./PopUpProps";

export const PopUp = withFormFactor<PopUpProps>({
    [FormFactorTypes.Default]: PopUpDesktop,
    [FormFactorTypes.Tablet]: PopUpTablet,
    [FormFactorTypes.Mobi]: PopUpMobi,
  })as unknown as React.ElementType<PopUpProps>;
