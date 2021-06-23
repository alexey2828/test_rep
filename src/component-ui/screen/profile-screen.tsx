import React from 'react';
import { styles } from './screens-styles/screenStyle.styles';
import { Text, View, ScrollView, Image } from 'react-native';

export const ProfileScreen: React.FC = () => {

  return (
    <View style={styles.containerP}>
      <View style={{flex: 1}}> 
        <ScrollView> 
          <View style={styles.firstContainer}>
            <View style={styles.row}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830045547741708298/unknown.png' }}
                style={styles.UserAvatar} />
              <View style={styles.UserNameBlock}><Text style={{color: '#ffffff', fontSize: 20}}>Іванов Олександр<Text style={{color: '#a1a1a1', fontSize: 14}}>#23</Text></Text>
                <Text style={styles.listItenTextFs14}>Посада</Text>
              </View>
            </View>
            
            <View style={styles.secondContainer}></View>
            <View style={[styles.row, {margin: 18}]}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044311365746688/unknown.png' }}
                style={styles.PhoneIco} />
              <Text style={styles.listItenTextFs14}>+380703671292</Text>
            </View>
          </View>
            
          <View style={styles.firstContainer}>
            <View style={styles.row}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                style={styles.ListIco} />
              <View style={styles.listIten}><Text style={styles.listItenTextFs16}>Відділ: <Text style={styles.listItenTextFs16Dark}>Назва</Text></Text>
                  
              </View>
            </View>

            <View style={[styles.row, {marginLeft: 15}]}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                style={styles.ListIco} />
              <View style={styles.listIten}><Text style={styles.listItenTextFs16}>Роль: <Text style={styles.listItenTextFs16Dark}>АРМ АС КК</Text></Text>
                  
              </View>
            </View>

            <View style={styles.row}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830044836492214332/unknown.png' }}
                style={styles.PasswordIco} />
              <View style={styles.listIten}><Text style={styles.listItenTextFs16}>Пароль: <Text style={styles.listItenTextFs16Dark}>xxxxxxx</Text></Text>
                  
              </View>
            </View>
            <View style={styles.secondContainer}></View>
            <View style={styles.row}>
              <Image source={{ uri: 'https://cdn.discordapp.com/attachments/466314747281801228/830046681898287195/unknown.png' }}
                style={{width: 22, height: 22, margin: 2}} />
              <View style={styles.listIten}><Text style={{color: '#ffffff', marginLeft: -2, marginTop: 2, fontSize: 16}}>Вийти</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      </View>
    </View>
  );
  
}
