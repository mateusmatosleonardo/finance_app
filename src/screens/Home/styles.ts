import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: ${RFValue(20)}px;
  text-align: center;
  padding: 5px 0px 15px 0px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 20px 0px 20px;
`;

export const WrapperCarousel = styled.View`
  max-height: 250px;
`;

export const WrapperTransactions = styled.View`
  flex: 1;
  /* width: 100%;
  height: 100%; */
  margin-top: 25px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({ theme }) => theme.colors.OTHER_GRAY};
`;

export const Bar = styled.View`
  width: 80px;
  height: 4px;
  border-radius: 4px;
  margin: 14px auto;
  background-color: #d1d5fd;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 6px;
  padding: 0px 25px 20px 25px;
`;

export const TitleTransactions = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Medium};
  color: ${({ theme }) => theme.colors.BLACK};
  font-size: ${RFValue(20)}px;
`;
