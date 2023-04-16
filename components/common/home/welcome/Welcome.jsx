import { useState } from "react"
import { View, Text,TouchableOpacity,FlatList,TextInput,Image} from "react-native"
import { useRouter } from "expo-router"
import styles from "./welcome.style"
import { icons,SIZES } from "../../../../constants"

const jobTypes = ["Full-time", "part-time","contractor"] 
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
const router = useRouter();
const[activeJobType,setActiveJobType]=useState('Full-time')
  
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Vemila</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
        </View>
        <View style={styles.searchContainer}>
         <View style={styles.searchWrapper}>
           <TextInput style={styles.searchInput}
           placeholder="what job are you looking for"
           value={searchTerm}
           onChangeText={(text) => setSearchTerm(text)}
           />
           <TouchableOpacity style={styles.searchBtn}  onPress={handleClick}
           >
            <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
            />
           </TouchableOpacity>
         </View>
        
        </View>
        <View style={styles.tabsContainer}>
          <FlatList 
          data={jobTypes}
          renderItem={({item})=> (
            <TouchableOpacity style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeJobType,item)}>
                {item}</Text></TouchableOpacity>
          )}
             keyExtractor={item => item} 
             contentContainerStyle={{columnGap:SIZES.small}}
             horizontal
              />
        </View>
        </View>
  )
}

export default Welcome;