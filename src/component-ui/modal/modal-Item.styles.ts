import { TextStyle, ViewStyle, ImageStyle } from 'react-native';

const btnNavBarContainerAdd: ViewStyle = {
  width: 75, height: 75, backgroundColor: '#BB86FC', borderRadius: 50, margin: -35, alignItems: 'center', borderWidth: 0.5, borderColor: '#232323', position: 'relative' , zIndex: 200 
}
const navBarIco: TextStyle = {
  color: '#a1a1a1'
}
const btnNavBarContainerAddPlus: TextStyle = {
  fontSize: 45, marginTop: 5
}
const addItemContainer: ViewStyle = {
  width: 320, height: 350, marginLeft: 0, backgroundColor: '#242424', marginTop: 100, borderRadius: 10
}
const title: TextStyle = {
  color:'#ffffff', fontSize: 25, margin: 20
}
const itemList: ViewStyle = {
  width: '90%', marginRight: 'auto', height: 3, marginLeft: 'auto', backgroundColor: '#333334', borderRadius: 10
}
const backBtn: TextStyle = {
  color: '#ffffff', textAlign: 'right', margin: 20, fontSize: 20, 
}
const backBtnContainer: ViewStyle = {
  marginTop: 50
}


//ModalItems Component


const addItemMainContainer: ViewStyle = {
  width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: -50
}

const cardImg: ImageStyle = {
  width: 35, height: 35, position: 'absolute', marginTop: 15
}

const titleContainer: ViewStyle = {
  position: 'absolute', marginLeft: 20,
}

const btnTitle: TextStyle = {
  color: '#ffffff', width: '100%', fontSize: 19, margin: 20
}

const mgtop: TextStyle = {
  marginTop: 50
}

//AddItems Component

const DMcontainer: TextStyle = {
  position: 'absolute', zIndex: 10, height: '81%', alignSelf: 'center'
}

const btnContainer: ViewStyle = {
  display: 'flex', flexDirection: 'row', alignSelf: 'flex-end'
}

//main modal data 

const modalWrapper: ViewStyle = {
  flex: 1, marginTop: -10, height: 'auto', position: 'absolute', zIndex: 100, marginLeft: 5
}

const ModalMainContainer: ViewStyle = {
  width: 320, marginLeft: 15, backgroundColor: '#242424', borderRadius: 10
}

const DetailsModal: ViewStyle = {
  margin: 0, height: 'auto', backgroundColor: '#191919', borderTopColor: '#333334', borderWidth: 1
}

const BackBtnHeader: TextStyle = {
  color: '#ffffff', margin: 15, fontSize: 20,
}

const BackBtn: TextStyle = {
  color: '#ffffff', margin: 15, fontSize: 16, textAlign: 'right'
}

export const styles = {
  navBarIco,
  btnNavBarContainerAddPlus,
  addItemContainer,
  title,
  itemList,
  backBtn,
  btnNavBarContainerAdd,
  addItemMainContainer,
  cardImg,
  titleContainer,
  btnTitle,
  mgtop,
  DMcontainer,
  btnContainer,
  backBtnContainer,
  ModalMainContainer,
  modalWrapper,
  DetailsModal,
  BackBtn,
  BackBtnHeader
};




