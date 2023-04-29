import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text } from 'react-native';

interface Member {
    login: string;
    avatar_url: string;
}

const  Main: React.FC = () =>{
   const [member, setMenbers] = useState<Member[]>([]);

   useEffect(() => {
<!--     fetch('').then(response => {  adicione um valor como link para o banco de dados. -->  
        response.json().then(data =>{
            setMenbers(data);
        });
    });
   }, []);
  return (
    <FlatList 
        contentContainerStyle={{ padding: 24 }}
        data = {member}      
        keyExtractor={member => member.login}
        renderItem = {({item: member}) => {
            return (
                <view /* style={styles.member} */>
                    <Image source={{ uri: member.avatar_url }} /> 
                    <Text>{member.login}</Text>
                </view>
            );
        }}
    /> 
  );
}

/* const styles = StyleSheet.create({
member: {
    flexDirection: 'row',
    alignItens: 'center',
    marginBotton: 20
},
    image: {
        width: 48,
        heidth: 48,
        bordeRadius: 24
        marginRight: 16
    }
}); */

export default  Main;
