import React from 'react';
import { View, Text } from 'react-native';
import { IDetaiComponentBatchPlace } from '..';
import { IModalDetail } from '../../infrastructure/utils/choose-popup-detail';
import { styles } from '../ui/component-batch-place-items/component-batch-place-item.styles';
import { ETitleFields } from '../const/titile-fields';

interface TDetaiComponentBatchPlace extends IModalDetail {
  entity: IDetaiComponentBatchPlace;
}

export const DetaiComponentBatchPlace: React.FC<TDetaiComponentBatchPlace> = ({ entity }) => {
  return (
    <View>
      <Text style={styles.itemInfo}>{ETitleFields.party}: <Text style={styles.itemInfoa1}>{entity.batchNumber}</Text></Text>
      <Text style={styles.itemInfo}>{ETitleFields.party}: <Text style={styles.itemInfoa1}>{entity.batchPlaceNumber}</Text></Text>
      <Text style={styles.itemInfo}>{entity.state}</Text>
    </View>
  );
}