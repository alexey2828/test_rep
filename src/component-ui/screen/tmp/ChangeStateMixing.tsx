import React, { useState, useEffect, ReactNode } from 'react';
import { Text, Pressable, View } from 'react-native';

type TDetailsModal = {
    children: ReactNode;
    onClose: () => void;
  }

export const ChangeStateMixingScreen: React.FC<TDetailsModal> = ({ children, onClose }) => {


  const [postId, setPostId] = useState('');
  const [newState, setnewState] = useState('');

  useEffect(() => {
    async function updatePost() {
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/ld+json' },
        body: JSON.stringify({ name: 'dd', issuerId: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })
      };
      const response = await fetch('http://159.89.213.194:81/api/components/5fad3dda-c24e-48c2-af4a-e779074c6c82', requestOptions);
      const data = await response.json();
      setPostId(data.name);
    }
    updatePost();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text>{postId}</Text>
      <Pressable onPress={(): void => {setnewState('Новый')}}>
        <Text>test</Text>
      </Pressable>
      <Pressable onPress={(): void => {setnewState('Списано')}}>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};


