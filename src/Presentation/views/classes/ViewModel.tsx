
import { useRef, useState} from 'react'
import {ScrollView, Dimensions } from 'react-native'
const screenWidth = Dimensions.get("screen").width

export default function ViewModel() {
    
    const [xPosition, setXPosition] = useState(0)
   
    const scrollViewRef = useRef<ScrollView>(null)
    
    const ScrollTo = (xPosition: number) => {
      scrollViewRef.current?.scrollTo({ 
        x: xPosition,
        animated: true
      })
      setXPosition(xPosition)
    }
    
    const onEndScroll = (e: any) => {
      const xPosition = e.nativeEvent.contentOffset.x
      
      if(xPosition >= screenWidth / 2) {
        ScrollTo(screenWidth * 2)
        setXPosition(screenWidth * 2)
      } else {
        ScrollTo(0)
        setXPosition(0)
      }
      
    } 
    return {xPosition,setXPosition,scrollViewRef,ScrollTo,onEndScroll}
}

