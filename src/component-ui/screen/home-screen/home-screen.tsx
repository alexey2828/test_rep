import { StyleSheet, View, ScrollView} from 'react-native';
import { Menu } from '../../menu/menu';
import { strPropsMenuItem } from './struct-props-menuItem';

import 'react-native-gesture-handler';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}> 
          <View style={{height: 600}}>
            <Menu 
              itemsList={strPropsMenuItem}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;

