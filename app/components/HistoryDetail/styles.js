import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const imageWidth = Dimensions.get('window').width * .85;

export default EStyleSheet.create({

    contentContainer: {
        flexGrow: 1, 
        alignItems:'center'
    },
    container: {        
        paddingLeft: 15,
        paddingRight: 15,
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        width: imageWidth,
        resizeMode: 'contain'
    },
    header :{
            color: 'white',
            fontSize: 20,
            alignSelf: 'stretch',
            backgroundColor: '$primaryOrange',
            padding: 5,
    },
    detail: {
        padding:10,
        color: 'white',
        backgroundColor: '$primaryPurple'
    },

});