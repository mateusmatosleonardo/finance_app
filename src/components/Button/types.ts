import { StyleProp, ViewStyle } from 'react-native';

export interface IButton {
  title?: string;
  icon: any;
  size_icon: number;
  color_icon: string;
  color_is_linear: boolean;
  colors?: string[] | any;
  style: StyleProp<ViewStyle>;
}
