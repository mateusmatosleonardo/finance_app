import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo } from 'react-native';
import * as S from './styles';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { ICard } from '../../components/Card/types';
import { Button } from '../../components/Button/Button';
import Carousel from 'react-native-snap-carousel';
import SearchIcon from '@expo/vector-icons/Feather';
import { Transactions } from '../../components/Transactions/Transactions';
import { ITransactions } from '../../components/Transactions/types';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;

export function Home() {

  const [carouselItems, setCarouselItems] = useState<ICard[]>([
    {
      id: 1,
      number_card: '3527878767527699',
      balance: '6,000',
      flag: 'cc-mastercard',
      transactions: [{
        id: 1,
        transaction_name: 'Gasolina',
        transaction_amount: '50.00',
        transaction_status: false,
        transaction_date: '20 Jul, 3:16 PM'
      }]
    },
    {
      id: 2,
      number_card: '3527878767527699',
      balance: '2,500',
      flag: 'cc-visa',
      transactions: [{
        id: 1,
        transaction_name: 'Roupa',
        transaction_amount: '140.00',
        transaction_status: false,
        transaction_date: '20 Jul, 3:16 PM'
      }]
    },
    {
      id: 3,
      number_card: '3527878767527699',
      balance: '2,000',
      flag: 'cc-paypal',
      transactions: [{
        id: 1,
        transaction_name: 'Roupa',
        transaction_amount: '140.00',
        transaction_status: false,
        transaction_date: '20 Jul, 3:16 PM'
      }]
    }
  ]);

  const [transactions, setTransactions] = useState<ITransactions[]>([
    {
      id: 1,
      transaction_amount: '52.00',
      transaction_name: 'Shopping',
      transaction_status: false,
      transaction_date: '20 Jul, 3:16 PM',

    },
    {
      id: 2,
      transaction_amount: '100.00',
      transaction_name: 'Crédito',
      transaction_status: true,
      transaction_date: '20 Jul, 3:16 PM',
    },
    {
      id: 3,
      transaction_amount: '43.87',
      transaction_name: 'Shop nome',
      transaction_status: false,
      transaction_date: '20 Jul, 3:16 PM',
    }
  ]);

  function renderItem({ item, index: index }: ListRenderItemInfo<ICard>) {
    // console.log(item.transactions)
    return <Card {...item} key={index} />
  }

  function renderItemTransactions({ item }: ListRenderItemInfo<ITransactions>) {
    return <Transactions {...item} />
  }

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }: any) => {
    console.log("Visible items are", viewableItems);
    console.log("Changed in this iteration", changed);
  }, []);

  return (
    <S.Container>
      <Header />
      <S.Title>Meus Cartões</S.Title>
      <S.WrapperCarousel>
        <Carousel
          data={carouselItems}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          sliderHeight={100}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        />
      </S.WrapperCarousel>
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