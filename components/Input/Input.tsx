import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

 interface InputProps{
  query: string;
  setQuery: (value: string) => void;
 }
const Input = ({query, setQuery}: InputProps) => {
    const [text, setText] = useState(query);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);



    useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      setQuery(text);
    }, 500);  

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [text]);

  return (
 <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search GitHub users..."
         value={text}
        onChangeText={setText}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { padding: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
  },
});
export { Input };

