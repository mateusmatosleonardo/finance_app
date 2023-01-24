import React from 'react';
import * as S from './styles';
import { ITransactions } from './types';

export function Transactions({
  id,
  transaction_name,
  transaction_amount,
  transaction_status,
  transaction_date
}: ITransactions) {
  return (
    <S.Container key={id}>
      <S.Wrapper>
        <S.WrapperSymbol>
          <S.Symbol>{transaction_name.substring(0, 1)}</S.Symbol>
        </S.WrapperSymbol>
        <S.WrapperTransactions>
          <S.TransactionsName>{transaction_name}</S.TransactionsName>
          <S.Date>{transaction_date}</S.Date>
        </S.WrapperTransactions>
      </S.Wrapper>
      <S.TransactionNumber
        style={{ color: transaction_status ? '#5783e0' : '#af6ae4' }}>
        {transaction_status ? '+ ' : '- '}${transaction_amount}
      </S.TransactionNumber>
    </S.Container>
  );
}