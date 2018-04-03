import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    header :{
        backgroundColor: '$primaryOrange',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom:10,
        marginBottom:0,
    },
    headerText: {
       color: 'white',
       fontSize: 20,
       fontWeight: 'bold',
    },
    subHeaderText: {
        color: 'white',
        fontSize: 18,
    },
    content: {
        padding:25,
        backgroundColor: '$primaryPurple',
    },
    contentText: {
        color: 'white',
        fontSize: 18
    }
});

