
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  text: {
      color: 'white',
  },
  navBar: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$primaryBlue',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  rightIcon: {
    height: 10,
    width: 10,
    backgroundColor: 'white',
  }, 
  middleText: {
      fontSize: 22,
      fontWeight: "bold",
      color: 'white',
  }
});