import React, { useEffect, useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native'; 
import { Image, Card } from 'react-native-elements'; 
import firebase from 'firebase'; 
import styles from './styles'; 
import Sound from 'react-native-sound'; 
import layout from '../../../constants/layout'; 
const HEIGHT = layout.window.height;

const AnswerTypeTwo = (props: { content?: any; lessonInfo?: any;
   setNextQuestion?: any; id?: any; heart?: any; setHeart?: any }) => {

  const { content, lessonInfo, setNextQuestion, id, heart, setHeart } = props; 
  const database = firebase.database(); 
  const result =  database.ref('/topic_detail/' + 
  lessonInfo.topicName + '/test_bank/' + lessonInfo.lessonName + 
  '/results/' + content.id);
  const [backgrounColor,setBackgroundColor]=useState('#FFF');
  useEffect(() => {
    setNextQuestion(false);
    setBackgroundColor('#FFF'); 
  }, [id])
  
  function onPress(selected: any) {
    // console.log(selected); 
    result.on('value', function(snapshot: any){
      // console.log(snapshot); 
      if (snapshot.val().text == selected) {
        setBackgroundColor('blue')
      } else {
        setBackgroundColor('red')
        setHeart(heart-1)
      }
      // speaker
      const speaker = new Sound(snapshot.val().void_uri, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error); 
          return; 
        }
        setTimeout(() => {
          speaker.release(); 
          setNextQuestion(true); 
        }, speaker.getDuration()*1000)
        speaker.play((success) => {
          if (success) {
            console.log('successfully finished playing'); 
          } else {
            console.log('playback failed due to audio decoding errors')
          }
        })
      })
    })
  }

  return (
    <View style={{width:200,bottom:HEIGHT*0.01}}>
      <View>
        <TouchableOpacity
          style={styles.view_a}
          onPress={() => onPress('a')}
        >
          <Card containerStyle={{alignItems:'center',backgroundColor:backgrounColor}}>
            <Image
              source={{ uri: content.content_a }}
              containerStyle={styles.image}
            />
          </Card>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.view_b}
          onPress={() => onPress('b')}
        >
          <Card containerStyle={{backgroundColor:backgrounColor}}>
            <Image
              source={{ uri: content.content_b }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={styles.view_c}
          onPress={() => onPress('c')}
        >
          <Card containerStyle={{backgroundColor:backgrounColor}}>
            <Image
              source={{ uri: content.content_c }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.view_d}
          onPress={() => onPress('d')}
        >
          <Card containerStyle={{backgroundColor:backgrounColor}}>
            <Image
              source={{ uri: content.content_d }}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AnswerTypeTwo; 