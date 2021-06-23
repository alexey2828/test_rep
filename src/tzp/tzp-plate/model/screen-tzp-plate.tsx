import React from 'react';
import { ScrollView, View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../../infrastructure/screen-list';
import { TzpPlateItem } from '../ui/tzp-plate-items/tzp-plate-item';

type IScreenTzpPlate = IScreenListRoute

export const ScreenTzpPlate: React.FC<IScreenTzpPlate> = ({ route }) => {

  return (
    <View style={{backgroundColor: '#121212', height: 500}}>
      <ScrollView>
        <ScreenList route={route}>
          {TzpPlateItem}
        </ScreenList>
      </ScrollView>
    </View>
  );
};


