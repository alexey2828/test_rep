import React from 'react';
import { View, Text } from 'react-native';
import { ITzpPlate } from '..';
import { styles } from '../../../component-batch-place/ui/component-batch-place-items/component-batch-place-item.styles';
import { IModalDetail } from '../../../infrastructure/utils/choose-popup-detail';

interface TDetailTZPDetail extends IModalDetail {
  entity: ITzpPlate;
}

export const DetailTzpPlate: React.FC<TDetailTZPDetail> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>Название компонента: <Text style={styles.itemInfoa1}>{entity.name}</Text></Text>
      <Text style={styles.itemInfo}>Номер нормативного документа: <Text style={styles.itemInfoa1}>{entity.normativeDocument}</Text></Text>
    </View>
  );
}