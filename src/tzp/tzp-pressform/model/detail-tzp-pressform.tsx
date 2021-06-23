import React from 'react';
import { View, Text } from 'react-native';
import { ITzpPressform } from '..';
import { IModalDetail } from '../../../infrastructure/utils/choose-popup-detail';
import { styles } from './tzp-pressform.styles';

interface TDetailTzpPressform extends IModalDetail {
  entity: ITzpPressform;
}

export const DetailTzpPressform: React.FC<TDetailTzpPressform> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>Название компонента: <Text style={styles.itemInfoa1}>{entity.number}</Text></Text>
      <Text style={styles.itemInfo}>Номер нормативного документа: <Text style={styles.itemInfoa1}>{entity.passport}</Text></Text>
    </View>
  );
}