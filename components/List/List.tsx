import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { listUsers } from '@/redux/slices';
import { RootState } from '@/redux/store';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { Item } from '../Item';
import { Input } from '../Input';

const List = () => {
    const dispatch = useAppDispatch();
  const {users, loading} = useAppSelector((state: RootState) => state?.user);
  const [searchQuery, setSearchQuery] = useState('');

 const filteredUsers = users.filter((user) => {
    const value = searchQuery.toLowerCase();
    return (
      user.login.toLowerCase().includes(value) ||
      user.name?.toLowerCase().includes(value)
    );
  });


  useEffect(() => {
    dispatch(listUsers(0,30));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  


  return (
    <View>
      <Input
      query={searchQuery}
      setQuery={setSearchQuery}
      
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Item user={item} />}
      />
    </View>
  )
}

export { List };

