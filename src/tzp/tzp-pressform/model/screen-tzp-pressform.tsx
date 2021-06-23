import React from 'react';
import { ScrollView, View } from 'react-native';
import { IScreenListRoute, ScreenList } from '../../../infrastructure/screen-list';
import { TzpPressformItem } from '../ui/tzp-pressform-items/tzp-pressform-item';

type ITzpPressform = IScreenListRoute

export const ScreenTzpPressform: React.FC<ITzpPressform> = ({ route }) => {

  return (
    <View style={{backgroundColor: '#121212', height: 500}}>
      <ScrollView>
        <ScreenList route={route}>
          {TzpPressformItem}
        </ScreenList>
      </ScrollView>
    </View>
  );
};


