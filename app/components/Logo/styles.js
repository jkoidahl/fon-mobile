import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width * .6;

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        height: imageWidth,
    },
    text: {
        color: '$primaryTextColor',
        fontSize: 24
    },
});