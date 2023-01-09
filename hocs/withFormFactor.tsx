import React from 'react'
import { FormFactorContext } from '../contexts/formFactor'
import { FormFactorTypes } from '../common/constants'

export function withFormFactor<Type>(Components: any, { formFactorProps = {} } = {}): Type {
  const ComponentWithFormFactor: any = React.forwardRef<Type>((props, ref) => {
    const formFactor = React.useContext(FormFactorContext)
    const Component = Components[formFactor] || Components[FormFactorTypes.Default] || (() => null)

    const combinedProps: any = { ...props }
    const componentDefaultProps = Component.defaultProps || {}
    let _formFactorProps: any = formFactorProps
    const factorProps = {
      ..._formFactorProps[FormFactorTypes.Default],
      ..._formFactorProps[formFactor],
    }

    for (const [key, value] of Object.entries(factorProps)) {
      if (combinedProps[key] !== undefined && combinedProps[key] !== componentDefaultProps[key]) {
        continue
      }

      combinedProps[key] = value
    }

    let displayName = ((Component && (Component.displayName || Component.name)) || 'unknown').replace(
      /(Desktop|Tablet|Mobi|Feature)/i,
      '',
    )

    displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1)

    ComponentWithFormFactor.displayName = displayName
    ComponentWithFormFactor.propTypes = Component.propTypes
    ComponentWithFormFactor.defaultProps = Component.defaultProps

    return <Component {...combinedProps} ref={ref} />
  })

  return ComponentWithFormFactor
}
