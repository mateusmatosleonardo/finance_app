import React from 'react';
import * as S from './styles';
import Icon from '@expo/vector-icons/FontAwesome';
import Menu from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';


export function Header() {
  return (
    <S.Container>
      <LinearGradient
        style={S.styles.wrapperProfile}
        colors={['#5561fc', '#7e4cf3']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.6, y: 1 }}
      >
        <Icon name='user' size={24} color='#ffffff' />
      </LinearGradient>
      <Menu name='align-right' size={28} color='#171b2f' />
    </S.Container>
  );
}