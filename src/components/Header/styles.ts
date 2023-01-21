import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 22px;
`;

export const styles = StyleSheet.create({
  wrapperProfile: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 48 / 2,
  },
});
