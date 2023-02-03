import React from 'react';
import { Dimensions } from 'react-native';
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

const SLIDER_WIDTH = Dimensions.get('window').width;
const SPACING = SLIDER_WIDTH * 0.02;
const SIDECARD_LENGHT = (SLIDER_WIDTH * 0.12) / 2;
const CARD_LENGTH = SLIDER_WIDTH * 0.88;

export function Card({ index, number_card, balance, flag, scrollX }: ICard) {

  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH
  ];

  size.value = interpolate(
    //@ts-ignore
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
        marginLeft: index === 0 ? SIDECARD_LENGHT : SPACING,
        marginRight: index === 2 ? SIDECARD_LENGHT : SPACING,
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