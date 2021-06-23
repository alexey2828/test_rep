import React, { ReactNode, useState } from 'react';
import { Text, View, TouchableHighlight, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { styles } from './headerStyle.styles';

type THeader = (props?: {
  navigation: ReturnType<typeof useNavigation>;
}) => ReactNode;

export const Header: THeader = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = (): void => {
    setModalVisible(!isModalVisible);
  };

  const [isModalVisible2, setModalVisible2] = useState(false);
  const toggleModal2 = (): void => {
    setModalVisible2(!isModalVisible2);
  };

  const navigation = props?.navigation;
  return (
    <View style={{backgroundColor: '#121212' }}>
      <View style={styles.headerContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={toggleModal}>
            <View style={styles.burgWrap}>
              <Image source={require('../../public/images/menuIco.png')} style={styles.menuIco}/>
            </View>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Text style={styles.innerText2}>AС КК </Text>
          </View>
          <View style={styles.avatar}>
            <Pressable style={{marginLeft: 30}} onPress={toggleModal2}>
              <Image
                source={require('../../public/images/addItem2.png')}
                style={styles.addItemWrap}
              />
            </Pressable>
          </View>
        </View>
        <Modal 
          animationIn="slideInLeft"
          animationOut="slideOutLeft"
          animationInTiming={200}
          animationOutTiming={200}
          onBackdropPress={toggleModal}
          isVisible={isModalVisible}>
          <View style={styles.SideMenuContainer}>
            <View style={styles.ContentContainer}>
              <View style={styles.LogoContainer}>
                <Image source={require('../../public/images/ASALogo.png')} style={styles.LogoImg}/>
                <Text style={styles.LogoText}>АС КК</Text>
              </View>
            </View>
            <View style={styles.BtnContainer1}>
              <Image source={require('../../public/images/PlaceIco.png')} style={styles.BtnIco1}/>
              <Text style={styles.BtnText1}>Вибір будівлі</Text>
            </View>
          
            <View style={styles.BtnContainer1}>
              <Image source={require('../../public/images/home.png')} style={styles.BtnIco1}/>
              <TouchableHighlight onPress={(): void => { navigation?.navigate('Головна')}}>
                <Text style={styles.BtnText1}>Головна</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.BtnContainer1}>
              <Image source={require('../../public/images/profile.png')} style={styles.BtnIco1}/>
              <TouchableHighlight onPress={(): void => { navigation?.navigate('Profile')}}>
                <Text style={styles.BtnText1}>Профіль</Text>
              </TouchableHighlight>
            </View>
            
            <View style={styles.defaultBorder}></View>
            <View style={styles.BtnContainer2}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/826333483114430494/unknown.png' }} style={styles.BtnIco2}/>
              <TouchableHighlight onPress={(): void => { navigation?.navigate('List'); }}><Text style={styles.BtnText2}>Вийти</Text></TouchableHighlight>
            </View>

            <View style={{marginTop: '30%'}}>
              <View style={styles.defaultBorder}></View>
              <View style={styles.flex}>
                <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/827141915459584000/unknown.png' }} style={styles.foterIco}/>
                <Text style={styles.footerText}>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry`s Standard ake type specimen book. </Text>
              </View>
            </View>
          </View>
        </Modal>

        <Modal 
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={200}
          animationOutTiming={200}
          onBackdropPress={toggleModal2}
          isVisible={isModalVisible2}>
          <View style={styles.attItemContainer}>
            <TouchableHighlight onPress={(): void => { navigation?.navigate('CreateComponent')}}><Image source={require('../../public/images/componentsIco.png')} style={styles.btnAddItem}/></TouchableHighlight>
            <TouchableHighlight onPress={(): void => { navigation?.navigate('CreateMixing')}}><Image source={require('../../public/images/mixingIco.png')} style={styles.btnAddItem}/></TouchableHighlight>
            <Image source={require('../../public/images/pressFormTZPIco.png')} style={styles.btnAddItem}/>
            <Image source={require('../../public/images/pressFormTZPBodyIco.png')} style={styles.btnAddItem}/>
          </View>
        </Modal>

      </View>
    </View>
  );
}


