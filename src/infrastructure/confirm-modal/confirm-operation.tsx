import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';
import { API_MIXING_TYPE_SHORT_URL } from '../const/urls';
import { styles } from './confirm.styles';

export const GoBackMixing: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  return (<>
    <TouchableHighlight onPress={(): void => {setModalVisible(true)}}>
      <View style={styles.titleWrapper}> 
        <Text style={styles.title}>Назад до замішування</Text>
      </View>
    </TouchableHighlight>
    <Modal 
      animationInTiming={200}
      animationOutTiming={200}
      onBackdropPress={toggleModal}
      isVisible={isModalVisible}>
      <View style={styles.modalBack}>
        <View style={{margin: 10}}>
          <Text style={styles.modalTitle}>Підтведіть дію</Text>
          <Text style={styles.modalText}>Ви впевнені, що хочете завершити операцію?</Text>
          <View style={styles.modalContainer}>
            <TouchableHighlight onPress={(): void => {setModalVisible(false)}}>
              <Text style={styles.goBack}>Назад</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={(): void => { navigation?.navigate(API_MIXING_TYPE_SHORT_URL), setModalVisible(false)}}>
              <View style={styles.btnContainer}> 
                <Text style={styles.btnTitle}>До замішування</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  </>);
}

