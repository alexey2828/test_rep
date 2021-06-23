import React from 'react';
import { View, Text } from 'react-native';
import { ITZPDetail } from '..';
import { IModalDetail } from '../../../infrastructure/utils/choose-popup-detail';
import { styles } from '../ui/tzp-detail-items/tzp-detail-item.styles';

interface TDetailTZPDetail extends IModalDetail {
  entity: ITZPDetail;
}

export const DetailMixing: React.FC<TDetailTZPDetail> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>Название компонента: <Text style={styles.itemInfoa1}>{entity.name}</Text></Text>
      <Text style={styles.itemInfo}>Номер нормативного документа: <Text style={styles.itemInfoa1}>{entity.normativeDocument}</Text></Text>
    </View>
  );
}