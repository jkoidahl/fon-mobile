import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {        
        marginLeft:15,
        paddingRight:20,
    },
    header :{
        color: 'white',
        fontSize: 20,
        alignSelf: 'stretch',
        backgroundColor: '$primaryOrange',
        padding: 5,
    },
    detailWrapper: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 15,
        marginBottom: 3,
        
        backgroundColor: '$primaryPurple'
    },
    bullet: {
        fontSize:18,
        color: 'white',
    },
    detail: {
        color: 'white',
        fontSize: 18,
    },

});