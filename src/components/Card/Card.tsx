import React from 'react';
import { ICard } from './types';
import * as S from './styles';
import DotSingle from '@expo/vector-icons/Entypo';
import CreditCard from '@expo/vector-icons/FontAwesome';
import Animated, {
  Extrapolate,
  interpolate,
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';
import { MEASUREMENTS } from '../../utils/measurements';

export function Card({ index, number_card, balance, flag, scrollX }: ICard) {

  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * MEASUREMENTS.CARD_LENGTH,
    index * MEASUREMENTS.CARD_LENGTH,
    (index + 1) * MEASUREMENTS.CARD_LENGTH
  ];

  size.value = interpolate(
    // @ts-ignore
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
    }
  });

  return (
    <Animated.View
      key={index}
      style={[S.styles.wrapperCard, cardStyle, {
        marginLeft: index === 0 ? MEASUREMENTS.SIDECARD_LENGHT : MEASUREMENTS.SPACING,
        marginRight: index === 2 ? MEASUREMENTS.SIDECARD_LENGHT : MEASUREMENTS.SPACING,
        backgroundColor: index === 0 ? '#7070ff' : index === 1 ? '#3175e6' : '#99bfe7'
      }]}
    >
      <S.WrapperCardNumber>
        <DotSingle name='dot-single' size={16} color='#ffffff' />
        <DotSingle name='dot-single' size={16} color='#ffffff' />
        <DotSingle name='dot-single' size={16} color='#ffffff' />
        <DotSingle name='dot-single' size={16} color='#ffffff' />
        <S.CardNumber>{number_card.substring(12)}</S.CardNumber>
      </S.WrapperCardNumber>
      <S.Footer>
        <S.WrapperBalance>
          <S.BalanceText>Saldo</S.BalanceText>
          <S.Balance>$ {balance}</S.Balance>
        </S.WrapperBalance>
        <CreditCard name={flag} size={40} color='#fafafa' />
      </S.Footer>
    </Animated.View >
  );
}