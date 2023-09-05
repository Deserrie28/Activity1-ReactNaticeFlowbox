import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';

const Head= () => {
  return(
    <View>
       <Image source={{ uri: 'https://assets.vogue.in/photos/5ce435fecc50be4b0d1402b4/2:3/w_2560%2Cc_limit/Shivani-the-Indian-artist-from-Now-United.jpg'}} style ={styles.Picture} />
     </View>
  ) 
};
const NameCourse = () =>{
  return(
    <View> 
<Text style ={styles.name}> Desserie Gumonit </Text>
<Text style={styles.course}> BS Information Technology </Text> 
</View>
  )
}

const Subjects = () =>{
  return(
    <View>
      <Text style={styles.label}> My Subject </Text>
    </View>
  )
}
const SubjectOffered = ()=>{
  return(
     
       <View style = {styles.subjectContainer}>
  <View style = {styles.subjectOffered1}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 2</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Web Development/Web Enterprise</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOffered1}>
        <View>
          <Text style = {styles.subjectCode}>ELEC 3</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Mobile Application</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOffered1}>
        <View>
          <Text style = {styles.subjectCode}>IT 311</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Software Engineering</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    <View style = {styles.subjectOffered1}>
        <View>
          <Text style = {styles.subjectCode}>IT 312</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Information and Assurance 2</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>
    
    <View style = {styles.subjectOffered1}>
        <View>
          <Text style = {styles.subjectCode}>IT 313</Text>
          </View>
          <View>
          <Text style = {styles.subjectDescription}>Quantitative Methods</Text>
          <Text style = {styles.subjectUnits}> Units: 3</Text>
        </View>
        </View>

    </View>
  )
}

export default function App() {
  return (
   <View style = {styles.containerForAll}> 
    <View style={styles.container}>
      
    <View style={styles.contaner1}>
      <Head />
      <NameCourse />
      </View>

      
      <View style ={styles.label}>
      <Subjects/> 
      </View>

      
      <SubjectOffered/>
      
       
      </View>

      <View>
        <Text style={styles.seeMore}>Click here to see more</Text>
      </View>

    <StatusBar style="auto" />
    </View>
     
     );
}
 
const styles = StyleSheet.create({
  container:{
    alignItems: 'left',
  },
 
  contaner1: {
    backgroundColor: '#24469C',
    alignItems: 'left',
    width: 350,
    height: 260,
    marginBottom:'40px',
    marginTop:'40px',
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
     
  },

  Picture: {
    marginLeft: '20px',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  
  name:{
    color: '#fff',
    fontSize: '20px',
    marginLeft: '20px' 
  },
  course: {
    color: '#fff',
    marginLeft: '20px',
  },

 label:{
  backgroundColor: '#ffOOff',
  color: '#ffOOff',
  marginLeft: 10,
  fontWeight: 'bold'
 },

 subjectOffered1:{
 flex: 1,
flexDirection: 'row',
justifyContent: 'flex-start',
alignItems: 'center',
with: 150,
backgroundColor: 'gray',
borderTopRightRadius: 10,
borderTopLeftRadius: 10,
borderBottomRightRadius: 10,
borderBottomLeftRadius: 10,
marginBottom:'8px',
marginTop:'8px',
},

 subjectCode:{
  fontSize: '22px', 
  padding:5,
  fontWeight:'bold',
  marginLeft:'20px',
   
},

subjectDescription:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectUnits:{
  marginLeft:'30px',
  borderBottomRightRadius: 10,
},

subjectContainer:{
  marginLeft: '10px',
marginRight: '10px',
 },

 containerForAll:{
marginLeft: '10px',
marginRight: '10px',
backgroundColor: 'brown',
 },

seeMore:{
  color:'silver',
  marginBottom:'40px',
  marginTop:'10px',
  marginLeft:'185px',
  fontSize: '15px',  
}
});
