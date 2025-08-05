import { useAppDispatch } from '@/hooks/hooks';
import { GitHubUser, selectUser, } from '@/redux/slices';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
  user: GitHubUser
}

const Item = ({ user }:ItemProps) => {
    const dispatch = useAppDispatch();

  return (
 <TouchableOpacity 
 onPress={() => dispatch(selectUser(user.login))}
 style={styles.item}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <View style={styles.info}> 
          <Text style={styles.name}>{user.login}</Text> 
        <Text style={styles.link} 
        // onPress={() => Linking.openURL(user.html_url)}
          
          
          >
          View Profile
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: 'blue',
  },
});
export { Item };

