import React, { ReactNode } from 'react';
import { View, ScrollView, TouchableHighlight, Text } from 'react-native';
import { styles } from './modal-Item.styles';

type TDetailsModal = {
  children: ReactNode;
  onClose: () => void;
}

export const ModalMain: React.FC<TDetailsModal> = ({ children, onClose }) => {
  return (<>
    <View style={{ backgroundColor: 'black', opacity: 0.70, position: 'absolute', width: 1000, marginTop: -50, height: '100%' }}>    
    </View>
    <View style={styles.modalWrapper}>
      <View style={{ flex: 1 }}>
        <View style={styles.ModalMainContainer}>
          <Text style={styles.BackBtnHeader}>Виробництво</Text>
          <ScrollView style={styles.DetailsModal}>
            <View style={{margin: 10, height: 300}}>
              <ScrollView>
                { children }
              </ScrollView>
            </View>
          </ScrollView>
          <View style={{margin: 10}}>
            <TouchableHighlight
              onPress={onClose}>
              <Text style={styles.BackBtn}>Назад</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  </>
  );
}
