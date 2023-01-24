import { StyleProp, ViewStyle } from 'react-native';

export interface IButton {
  colors: string[];
  color_icon: string;
  size_icon: number;
  icon: any;
  style: StyleProp<ViewStyle>;
  title?: string;
}
