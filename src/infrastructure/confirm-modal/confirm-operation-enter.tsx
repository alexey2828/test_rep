import React, { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './confirm.styles';
import { useNavigation } from '@react-navigation/native';

interface IConfirmData {
  dataEntity: {};
  route: string;
}

export const GoNext: React.FC<IConfirmData> = ({ route, dataEntity }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const dataEntityConfirm = dataEntity
  return (<>
    <TouchableHighlight onPress={(): void => {setModalVisible(true)}}>
      <View style={styles.titleWrapperPurple}> 
        <Text style={styles.title}>Далі</Text>
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
          <Text style={styles.modalText}>Ви впевнені, що ввели всі дані правильно?</Text>
          <View style={styles.modalContainer}>
            <TouchableHighlight onPress={(): void => {setModalVisible(false)}}>
              <Text style={styles.goBack}>Назад</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={(): void => { navigation?.navigate(route, {dataEntityConfirm}), setModalVisible(false)}}>
              <View style={styles.btnContainerPurple}> 
                <Text style={styles.btnTitle}>Далі</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  </>);
}
