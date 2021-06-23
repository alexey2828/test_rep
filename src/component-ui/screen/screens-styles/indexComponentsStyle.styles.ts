import { ViewStyle, ImageStyle, TextStyle } from 'react-native';

//NavBar Component

export const btnNavBarContainerHome: ViewStyle = {
  width: 75, height: 75, alignItems: 'center', marginLeft: 30, marginTop: 30
}

export const btnNavBarContainerQr: ViewStyle = {
  width: 75, height: 75, alignItems: 'center', marginRight: 30, marginTop: 30
}

export const btnNavBarContainerAdd: ViewStyle = {
  width: 75, height: 75, backgroundColor: '#BB86FC', borderRadius: 50, margin: -35, alignItems: 'center'
}

export const innerText: TextStyle = {
  color: '#a1a1a1'
}

export const navBarRow: ViewStyle = {
  flex: 1, flexDirection: 'row', justifyContent: 'space-between'
}

export const navBarMainContainer: ViewStyle = {
  position: 'absolute', width: '100%', height: 60, backgroundColor: '#242424', borderTopColor: '#333334', borderTopWidth: 2,  left: 0, right: 0, bottom: 0 
}

export const navBarIco: ImageStyle = {
  width: 25, height: 25, marginTop: -20
}



