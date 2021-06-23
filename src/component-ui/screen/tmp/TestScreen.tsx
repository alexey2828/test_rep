import React, { useState, useEffect } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { Loader } from '../../loader/Loader'

type ListMember = {
  name: string;
  id: string;
}
  
type ListMembers = {
  members: ListMember[];
}

type TTestScreen = {
  route: { name: string };
}
  
export const TestScreen: React.FC<TTestScreen> = (props) => {
  const [name1, setName] = useState('')

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ListMembers>({ members: [] });
  const [url, setUrl] = useState<string>(props.route.name);

  useEffect(() => {
    const setDataFromFetch = async (): Promise<void> => {
      setLoading(true);
      const dataFetch = await (await fetch(url)).json();
      const members: ListMember[] = dataFetch['hydra:member'];
      setLoading(false);
      setData({ ...data, members });
      console.log(name1);
    }
    setDataFromFetch();
  }, [url]);

  useEffect(() => {
    const url = 'http://159.89.213.194:81/api/components?name=' + name1;
    setUrl(url)
  }, [name1])

  return (
    <View>
      {isLoading ? (<Loader/>) : (
        data.members.map(member => {
        
          return (  
          // eslint-disable-next-line react/jsx-key
            <View>
              <Text>{member.name}</Text>
            </View>
          )
        })
      )
      }
      <TextInput
        placeholder="First name"
        maxLength={100}
        value={name1}
        onChangeText={(text): void => setName(text)}
        style={{ margin: 20, fontSize: 20, borderColor: 'black', borderWidth: 1, padding: 10 }}
      />
    </View>
   
  )
}