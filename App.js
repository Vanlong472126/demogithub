import React, {memo, useState, useReducer, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Bar = memo(({onClick}) => {
  console.log('CO LOG')
  return (
    <View>
      <TouchableOpacity onPress={()=>onClick()}>
      <Text>CHECK USEMEMO</Text>
      </TouchableOpacity>
      <FlatList
        data={[1,2,3,4]}
        renderItem={({item, index})=>{
        return <Text>{item +""}</Text>
        }}
        ListEmptyComponent={<Text>KHONG CO PHAN TU NAO</Text>}
      />
    </View>
  )
});

const App = () => {
  const [count, setCount] = useState(false);
  const onClick = useCallback(() => {
    console.log('HAM ONCLICK')
    setCount(!count)
  }, [count])
  return (
    <View>
      <Text>{count + ""}</Text>
      <TouchableOpacity onPress={()=>{
        setCount(!count)
      }}>
        <Text>CONG REDUX</Text>
      </TouchableOpacity>
      <Bar onClick={onClick}/>
    </View>
  )
}

export default App;