import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MEASUREMENTS } from '../../utils/measurements';

export const WrapperCardNumber = styled.Text`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  letter-spacing: 4px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const WrapperBalance = styled.View`
  justify-content: center;
  align-items: flex-start;
`;

export const BalanceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  letter-spacing: 0.5px;
`;

export const Balance = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const styles = StyleSheet.create({
  wrapperCard: {
    justifyContent: 'space-between',
    width: MEASUREMENTS.CARD_LENGTH,
    height: 170,
    borderRadius: 18,
    padding: 20,
  },
});
