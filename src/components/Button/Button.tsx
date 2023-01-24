import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import * as S from './styles';
import { IButton } from './types';
import Icon from '@expo/vector-icons/FontAwesome';

export function Button({ icon,
  style,
  colors,
  title,
  color_icon,
  size_icon }: IButton) {
  return (
    <LinearGradient
      style={style}
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {title ? <S.Title>{title}</S.Title> : ''}
      <Icon name={icon} size={size_icon} color={color_icon} />
    </LinearGradient>
  );
}