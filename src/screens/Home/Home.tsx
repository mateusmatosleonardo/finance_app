import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import Animated, { } from 'react-native-reanimated';
import * as S from './styles';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { ICard } from '../../components/Card/types';
import { Button } from '../../components/Button/Button';
import { Transactions } from '../../components/Transactions/Transactions';
import { ITransactions } from '../../components/Transactions/types';
import { MEASUREMENTS } from '../../utils/measurements';
import SearchIcon from '@expo/vector-icons/Feather';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<ICard>);

export function Home() {

  const [scrollX, setScrollX] = useState(0);

  const [carouselItems, setCarouselItems] = useState<ICard[]>([
    {
      index: 0,
      number_card: '3527878767527699',
      balance: '6,000',
      flag: 'cc-mastercard',
      transactions: [{
        id: 0,
        transaction_name: 'Gasolina',
        transaction_amount: '50.00',
        transaction_status: false,
        transaction_date: '20 Jul, 3:16 PM'
      }],
    },
    {
      index: 1,
      number_card: '3527878767527699',
      balance: '2,500',
      flag: 'cc-visa',
      transactions: [{
        id: 0,
        transaction_amount: '100.00',
        transaction_name: 'Crédito',
        transaction_status: true,
        transaction_date: '20 Jul, 3:16 PM',
      }],
    },
    {
      index: 2,
      number_card: '3527878767527699',
      balance: '2,000',
      flag: 'cc-paypal',
      transactions: [{
        id: 0,
        transaction_amount: '15.80',
        transaction_name: 'Sorveteria',
        transaction_status: false,
        transaction_date: '20 Jul, 3:16 PM',
      },],
    }
  ]);

  const [transactions, setTransactions] = useState<ITransactions[]>([
    {
      id: 0,
      transaction_amount: '52.00',
      transaction_name: 'Shopping',
      transaction_status: false,
      transaction_date: '20 Jul, 3:16 PM',

    },
    {
      id: 1,
      transaction_amount: '100.00',
      transaction_name: 'Crédito',
      transaction_status: true,
      transaction_date: '20 Jul, 3:16 PM',
    },
    {
      id: 2,
      transaction_amount: '15.80',
      transaction_name: 'Sorveteria',
      transaction_status: false,
      transaction_date: '20 Jul, 3:16 PM',
    },
    {
      id: 3,
      transaction_amount: '150.00',
      transaction_name: 'Pix',
      transaction_status: true,
      transaction_date: '20 Jul, 3:16 PM',
    },
    {
      id: 4,
      transaction_amount: '140.00',
      transaction_name: 'Roupas',
      transaction_status: false,
      transaction_date: '20 Jul, 3:16 PM',
    }
  ]);

  function renderItem({ item, index: index }: ListRenderItemInfo<ICard>) {
    return <Card {...item} key={index} scrollX={scrollX} />
  }

  function renderItemTransactions({ item }: ListRenderItemInfo<ITransactions>) {
    return <Transactions {...item} />
  }

  return (
    <S.Container>
      <Header />
      <S.Title>Meus Cartões</S.Title>
      <Animated.View>
        <AnimatedFlatList
          scrollEventThrottle={16}
          decelerationRate={0.8}
          snapToInterval={MEASUREMENTS.CARD_LENGTH + (MEASUREMENTS.SPACING * 2)}
          disableIntervalMomentum={true}
          disableScrollViewPanResponder={true}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={carouselItems}
          renderItem={renderItem}
          keyExtractor={item => String(item.index)}
          onScroll={(event) => {
            setScrollX(event.nativeEvent.contentOffset.x);
          }}
        />
      </Animated.View>
      <S.WrapperButtons>
        <Button
          style={{
            width: '48%',
            height: 55,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            borderRadius: 18,
          }}
          colors={['#7f4cf6', '#6767fd']}
          icon='exchange'
          size_icon={12}
          color_icon='#ffffff'
          title='Transfer'
        />
        <Button
          style={{
            width: '17%',
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 18,
          }}
          colors={['#e2e2f3', '#e2e2f3']}
          icon='long-arrow-down'
          size_icon={18}
          color_icon='#274eb2'
        />
        <Button
          style={{
            width: '17%',
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 18
          }}
          colors={['#e2e2f3', '#e2e2f3']}
          icon='plus'
          size_icon={18}
          color_icon='#274eb2'
        />
      </S.WrapperButtons>
      <S.WrapperTransactions>
        <S.Bar />
        <S.Header>
          <S.TitleTransactions>Transações</S.TitleTransactions>
          <SearchIcon name='search' size={24} color='#3858b3' />
        </S.Header>
        <FlatList
          data={transactions}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderItemTransactions}
        />
      </S.WrapperTransactions>
    </S.Container >
  );
}