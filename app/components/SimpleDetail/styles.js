import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {        
        flex : 1, 
        flexDirection: 'row', 
        marginLeft: 10,
        marginRight:10,
    },
    detail: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 15,
        marginBottom: 3,
        color: '$primaryPurple',
        backgroundColor: 'white',
        fontSize: 16,
    },

});