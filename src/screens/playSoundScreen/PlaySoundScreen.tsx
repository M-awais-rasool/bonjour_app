import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import Tts from 'react-native-tts';
import useStyles from './styles';
import {useTheme} from '../../contextProvider/ContextProvider';

const vocabulary = [
  {name: 'Alphabet'},
  {name: 'Greetings and politeness'},
  {name: 'Numbers from 1 to 20'},
  {name: 'Colors'},
  {name: 'Days of the week'},
  {name: 'Months'},
];

const speakWord = (word: any) => {
  Tts.speak(word);
};

const PlaySoundScreen = () => {
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const styles = useStyles();
  const {theme} = useTheme();

  const handlePress = (word: string) => {
    speakWord(word);
    setActiveWord(word);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.youText}>
        {'YOU'}
        <Text style={styles.frenchText}>{'FRENCH'}</Text>
      </Text>
      <Text style={styles.subText}>{'Learn by listening repeatedly'}</Text>
      <View style={styles.subContainer}>
        <ScrollView>
          {vocabulary.map((item, index) => (
            <Pressable
              key={index}
              style={[styles.wordButton]}
              onPress={() => handlePress(item.name)}>
              <Image
                style={{
                  tintColor:
                    activeWord != item.name ? theme.black : theme.textColor29,
                }}
                source={require('../../resource/play.png')}
              />
              <Text
                style={[
                  styles.wordText,
                  activeWord === item.name && styles.activeText,
                ]}>
                {item.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default PlaySoundScreen;
