
import { useState } from "react"

import { View, Text,ScrollView,SafeAreaView} from "react-native"
import { Stack,useRouter } from "expo-router"
import { COLORS, images,SIZES,icons } from "../constants"
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn"
import Welcome from "../components/common/home/welcome/Welcome"
import Popularjobs from "../components/common/home/popular/Popularjobs"
import Nearbyjobs from "../components/common/home/nearby/Nearbyjobs"


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();
  return (
  

    <SafeAreaView style ={{flex:1, backgroundColor:COLORS.lightWhite}}>

   <Stack.Screen
   options={{
    headerStyle:{backgroundColor:COLORS.lightWhite},
    headerShadowVisible:false,
    headerLeft:()=>(
        <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%"/> 
    ),
    headerRight:()=>(
        <ScreenHeaderBtn iconUrl={images.profile} dimension = "60%"/> 
    ),
    headerTitle:""
   }}/>
   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{
        flex:1,
        padding:SIZES.medium
    }}>
   <Welcome
   searchTerm={searchTerm}
   setSearchTerm={setSearchTerm}
   handleClick={() => {
     if (searchTerm) {
       router.push(`/search/${searchTerm}`)
     }
   }}
   />
   <Popularjobs/>
   <Nearbyjobs/>
    </View>
   </ScrollView>
    </SafeAreaView>
  )
}

export default Home



