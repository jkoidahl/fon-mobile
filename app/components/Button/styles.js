
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: '$primaryTextColor'
    },
    icon: {
        color: '$primaryIconColor'
    },
    
    textSecondary: {
        fontSize: 18,
        fontWeight: "700",
        color: '$secondaryTextColor',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        marginBottom: 20,
        marginLeft:35,
        marginRight: 35,
    }

});