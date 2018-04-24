import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '$primaryTextColor',
        fontSize: 24
    },
    image: {
        width: 275, 
        height: 275,
        resizeMode: 'cover'
    }

});