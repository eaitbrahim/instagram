import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: colors.primary, fontSize: font.size.xlg}}>
        Hello World
        <Entypo name="home" size={25} />
      </Text>
    </View>
  );
};

export default App;
