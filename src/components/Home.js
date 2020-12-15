import React, { memo } from 'react'
import { 
  AppRegistry,
  Text
} from 'react-native'


const Home = memo((props) => {
  return <>
    <Text>这是一个模板</Text>
  </>
}) ;

AppRegistry.registerComponent('Home', ()=>Home)