import React from 'react';
import * as S from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { IButton } from './types';
import Icon from '@expo/vector-icons/FontAwesome';

export function Button({
  title,
  icon,
  size_icon,
  color_icon,
  color_is_linear,
  colors,
  style }: IButton) {
  return (
    <>
      {color_is_linear ? (<LinearGradient
        style={style}
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {title ? <S.Title>{title}</S.Title> : ''}
        <Icon name={icon} size={size_icon} color={color_icon} />
      </LinearGradient>) :
        (<S.Button style={style}>
          {title ? <S.Title>{title}</S.Title> : ''}
          <Icon name={icon} size={size_icon} color={color_icon} />
        </S.Button>)}
    </>
  );
}