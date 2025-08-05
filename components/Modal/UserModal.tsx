import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { closeModal } from '@/redux/slices';
import { RootState } from '@/redux/store';
import React from 'react';
import { ActivityIndicator, Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

const UserModal = () => {

    const dispatch = useAppDispatch();
  const {user, loading} = useAppSelector((state: RootState) => state.user);

  if (!user) return null;
  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;
  
  return (
    // <View>
    //   <Text>UserModal</Text>
    // </View>
       <Modal transparent animationType="fade">
      <TouchableWithoutFeedback onPress={() => dispatch(closeModal())}>
        <View style={styles.backdrop}>
          <View style={styles.modal}>
            <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
            <Text style={styles.name}>{  user.login}</Text>
            <Text>Location: {user.location || 'N/A'}</Text>
            <Text>Followers: {user.followers}</Text>
            <Text>Following: {user.following}</Text>
            <TouchableOpacity onPress={() => dispatch(closeModal())}>
              <Text style={styles.closeBtn}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 12,
    width: 300,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  closeBtn: {
    marginTop: 15,
    color: 'blue',
  },
});
export { UserModal };

