import React from 'react'
import PropTypes from 'prop-types'
import  { Validation} from '../../common/validation'
import { Base } from '../container/Containers'

interface SvgProps {
  stateProvider?: string
  src?:string,
  fallback?:string,
  transform?:string,
  hoverTransform?:string,
}

// const parser = new DOMParser();
// const stateProvider = State.with('ColorSvg', '',{useIndexedDB: true});

export const ColorSvg = ( props:any )=> {

  const {
    src,
    fallback,
    transform,
    hoverTransform,
    // cacheStrategy,
    ...containerProps
  } = props;

  const [
    state,
    setState
  ] = React.useState({
    svgElement: null,
  });

  // React.useEffect(() => {

  //   let isMounted = true;

  //   stateProvider
  //     .fetch(src, {
  //       method: 'GET',
  //       // strategy: cacheStrategy,
  //       enabledTracing: false,
  //       shouldPersist: false,
  //     })
  //     .then(res => {

  //       if (Validation.isValidResult(res) || !fallback) {
  //         return res;
  //       }

  //       return stateProvider
  //         .fetch(fallback, {
  //           method: 'GET',
  //           // strategy: cacheStrategy,
  //           enabledTracing: false,
  //           shouldPersist: false,
  //         });
  //     })
  //     .then(res => {

  //       if (!isMounted) {
  //         return;
  //       }

  //       if (!Validation.isValidResult(res)) {
  //         // ColorSvg.sentry.warn('Invalid response. Cannot render SVG.');
  //         return;
  //       }

  //       const svgText = res.result;

  //       const svgDocument = parser.parseFromString(svgText, 'image/svg+xml');

  //       if (!svgDocument) {
  //         // ColorSvg.sentry.warn('Invalid SVG content. Cannot render SVG.');
  //         return;
  //       }

  //       const svgElement = document.adoptNode(svgDocument.documentElement);

  //       containerProps.width
  //         ? svgElement.setAttribute('width', '100%')
  //         : svgElement.removeAttribute('width');

  //       containerProps.height
  //         ? svgElement.setAttribute('height', '100%')
  //         : svgElement.removeAttribute('height');

  //       const strokeElements = svgElement.querySelectorAll('[stroke]:not([stroke="none"])');
  //       for (const element of strokeElements) {
  //         element.setAttribute('stroke', 'currentcolor');
  //       }

  //       const fillElements = svgElement.querySelectorAll('[fill]:not([fill="none"])');
  //       for (const element of fillElements) {
  //         element.setAttribute('fill', 'currentcolor');
  //       }

  //       setState(prevState => ({
  //         ...prevState,
  //         svgElement,
  //       }));
  //     })
  //     .catch(error => {

  //       ColorSvg.sentry.error(error);
  //     });

  //   return () => {
  //     isMounted = false;
  //   };
  // }, [
  //   src,
  //   fallback,
  // ]);

  const updateSvgElement = (parentElement:any) => {

    if (!parentElement || !state.svgElement) {
      return;
    }

    parentElement.appendChild(state.svgElement);
  };

  return (
    <Base
      display={'flex'}
      cursor={containerProps.onClick && 'pointer'}
      {...containerProps}>

      <Base
        display={'flex'}
        transform={transform}
        hoverTransform={hoverTransform}
        width={containerProps.width && '100%'}
        height={containerProps.height && '100%'}
        ref={updateSvgElement} />
    </Base>
  );
};

// ColorSvg.sentry = Sentry.with('Common', 'ColorSvg');

ColorSvg.propTypes = {
  ...Base.propTypes,
  src: PropTypes.string,
  fallback: PropTypes.string,
  onClick: PropTypes.func,
  cacheStrategy: PropTypes.string,
};

ColorSvg.defaultProps = {
  ...Base.defaultProps,
  src: null,
  fallback: null,
  onClick: null,
  // cacheStrategy: CacheStrategy.CacheOnly,
  height: '10vh',
  width: '10vh',
};
