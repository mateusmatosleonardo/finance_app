import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import * as S from './styles';
import DotSingle from '@expo/vector-icons/Entypo';
import CreditCard from '@expo/vector-icons/FontAwesome';
import { ICard } from './types';

export function Card({ id, number_card, balance, flag }: ICard) {
  return (
    <LinearGradient
      key={id}
      style={S.styles.wrapperCard}
      colors={['#5165ff', '#7070ff']}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      locations={[0.2, 0.6]}
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
    </LinearGradient>
  );
}