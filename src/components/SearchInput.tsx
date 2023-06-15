import React, { useState } from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import useDebouncedValue from '../hooks/useDebouncedValue'
import { useEffect } from 'react';

interface Props {
  onDebounce: (value: string) => void,
  style?: StyleProp<ViewStyle>
}

const SearchInput = ({ style, onDebounce }: Props) => {

  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(textValue);
  }, [debouncedValue])

  return (
    <View style={[styles.container, style]}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder='Buscar pokémon'
          style={styles.textInput}
          autoCapitalize='none'
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon
          name='search-outline'
          color='grey'
          size={30}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  textBackground: {
    backgroundColor: '#f3f1f3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchInput