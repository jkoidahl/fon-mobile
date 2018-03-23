import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 160,
        paddingTop: 0,
    },
    text: {
        color: '$primaryTextColor',
        fontSize: 24
    },
    button: {
        backgroundColor: 'white',
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        
    },
    buttonText: {
        fontWeight: "700",
        color: '$primaryBlue'
    }
});