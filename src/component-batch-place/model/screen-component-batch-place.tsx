import React from 'react';
import { ScrollView, View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../infrastructure/screen-list';
import { ComponentBatchPlaceItem } from '../ui/component-batch-place-items/component-batch-place-item';

type IScreenComponentBatchPlace = IScreenListRoute

export const ScreenComponentBatchPlace: React.FC<IScreenComponentBatchPlace> = ({ route }) => {

  return (
    <View style={{backgroundColor: '#121212', height: 500}}>
      <ScrollView>
        <ScreenList route={route}>
          {ComponentBatchPlaceItem}
        </ScreenList>
      </ScrollView>
    </View>
  );
};


