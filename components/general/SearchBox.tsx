import React, {
    useState,
    useEffect,} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withFormFactor } from '../../hocs/withFormFactor'
import { ColorCodes, Images, FormFactorTypes } from '../../common/constants'
import { H4Regular } from '../text/H4'
import { GeneralProps } from './GeneralProps'
import { Pill } from './Pill'
import { HContainer,
    HContainerV,
    HFillContainer, } from '../container/Containers'

    const Container = styled(HFillContainer)`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
`;

const SearchBoxContainer = styled.div<GeneralProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${props => props.inputPadding};
  border-radius: ${props => props.height};
  border: solid 0.1vh ${ColorCodes.Grey4};
`;

const SearchField = styled.input<GeneralProps>`
  flex: 1 0 auto;
  padding-left: 2vw;
  margin-bottom: 0;
  font-size: ${FontSizes.Smaller};
  color: ${ColorCodes.Black};
  font-family: ${FontFamilies.Light}, serif;
  border: none;
  outline: none;

  &:focus {
    border: none;
  }

  &::placeholder {
    color: ${ColorCodes.Grey6};
    font-size:${FontSizes.Smaller};
  }
`;

const searchBox = (
  props : GeneralProps
) => {

  const search = new Debounceable();

  const debounceSearch = search.debounce((
    searchText
  ) => {

    typeof props.onSubmit === 'function' && props.onSubmit({
      searchText: searchText
    });
  },
  props.debounceWait);

  const onSearchTextChanged = (
    e
  ) => {

    if (!e || !e.target || typeof e.target.value !== 'string') {
      return;
    }

    debounceSearch(e.target.value.trim());
  };

  useEffect(() => {
    return search.clear;
  });

  return (

    <Container
      flex={props.flex}
      width={props.width}
      height={props.height}
      padding={props.padding}
      margin={props.margin}
      minHeight={props.minHeight}
      minWidth={props.minWidth}
      maxHeight={props.maxHeight}
      maxWidth={props.maxWidth}>

      <SearchBoxContainer
        inputPadding={props.inputPadding}
        height={props.height}>

          <ColorSvg
            src={Images.Icons.Search}
            color={ColorCodes.Red1}
            height={'2vmin'}
            width={'2vmin'}
          />

          <SearchField
            id={props.id}
            automationId={props.automationId}
            placeholder={props.placeholder}
            type={'text'}
            onChange={onSearchTextChanged}
          />

      </SearchBoxContainer>

    </Container>


  );
};

searchBox.propTypes = {
  id: PropTypes.string,
  automationId: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  minHeight: PropTypes.string,
  minWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  inputPadding: PropTypes.string,
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func,
  debounceWait: PropTypes.number
};

searchBox.defaultProps = {
  id: 'unknown-searchbox',
  automationId: 'unknown-searchbox',
  width: '25vw',
  height: '5vh',
  padding: '0',
  margin: null,
  minHeight: null,
  minWidth: null,
  maxHeight: null,
  maxWidth: null,
  inputPadding: '1.25vh 1.5vw',
  placeholder: 'Type here to search',
  onSubmit: () => {},
  debounceWait: 750
};

export const SearchBox = withFormFactor({
  [FormFactorTypes.Default]: searchBox
}, {
  formFactorProps: {
    [FormFactorTypes.Mobi]: {
      width: '96vw',
      height: '7.84vh',
    },
    [FormFactorTypes.Tablet]: {
      width: '46.88vw',
      height: '5.6vh',
    },
  },
}) as React.ElementType<GeneralProps>;