import { withFormFactor } from "../../hocs/withFormFactor";
import { FormFactorTypes } from "../../common/constants";
import { PopUpDesktop } from "./PopUpDesktop";
import { PopUpTablet } from "./PopUpTablet";
import { PopUpMobi } from "./PopUpMobi";

export const PopUp = withFormFactor({
    [FormFactorTypes.Default]: PopUpDesktop,
    [FormFactorTypes.Tablet]: PopUpTablet,
    [FormFactorTypes.Mobi]: PopUpMobi,
  });
