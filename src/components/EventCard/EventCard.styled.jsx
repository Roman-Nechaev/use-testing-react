import styled from '@emotion/styled';

export const CardWrap = styled.div`
  position: relative;
  border: ${props => `2px dashed ${props.theme.color.black}`};
  padding: ${props => props.theme.spacing(4)};
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.color.primaryText};
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;

  svg {
    display: block;
    margin-right: 8px;
    color: ${props => props.theme.color.secondaryText};
  }

  &:hover,
  &focus {
    background-color: ${props => props.theme.color.blue};
  }
`;

const setBgColor = ({ evtntType, theme }) => {
  switch (evtntType) {
    case 'free':
      return theme.color.green;
    case 'paid':
      return theme.color.blue;
    case 'vip':
      return theme.color.red;

    default:
      return theme.color.black;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;

  color: #fff;

  background-color: ${setBgColor};
`;
