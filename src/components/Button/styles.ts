import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  letter-spacing: 1px;
`;
