import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';

const  Main: React.FC = () =>{
   const [menbers, setMenbers] = useState([]);

   useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/menbers').then(response => {
        response.json().then(data =>{
            setMenbers(data);
        });
    });
   }, []);
  return (
    <FlatList 
        data = {menbers}
        keyExtractor={member => member.login}
        renderItem = {({item: member}) => {
            return (
                <view>
                    <Image /> widt
                </view>
            );
        }}
    />
  );
}

export default  Main;