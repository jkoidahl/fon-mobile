import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 0,
    },
    containerContent: {
        alignItems: 'center',
        justifyContent: 'center',
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
        marginBottom: 20,
        
    },
    buttonText: {
        fontWeight: "700",
        color: '$primaryBlue'
    }
});