import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 25px;
  margin-bottom: 25px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperSymbol = styled.View`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 60 / 2;
  background-color: #e7e8fc;
  margin-right: 20px;
`;

export const Symbol = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: ${RFValue(22)}px;
`;

export const WrapperTransactions = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TransactionsName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: ${RFValue(17)}px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${RFValue(16)}px;
  margin-top: 4px;
  color: #d8d8e8;
`;

export const TransactionAmount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
  font-size: ${RFValue(18)}px;
  color: #d8d8e8;
`;
