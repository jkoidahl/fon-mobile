import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
    container: {        
        flex : 1, 
        flexDirection: 'row', 
        paddingLeft: 10,
        paddingRight: 10,
    },
    header :{
            color: 'white',
            fontSize: 20,
            alignSelf: 'stretch',
            backgroundColor: '$primaryOrange',
            padding: 5,
    },
    detail: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 15,
        marginBottom: 3,
        color: 'white',
        backgroundColor: '$primaryPurple'
    },

});