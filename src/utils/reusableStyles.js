
const colors = {
  lightPurple : '#DBDFFD',
  mediumPurple : '#9BA3EB',
  blueish: '#AAC4FF',
  deepPurple: '#646FD4',
  vampire : '#25316D',
  link : '#F94892',
  green : '#00884F',
  red : '#FF0000',
  paleRed : '#FFC4C4',
  paleGreen : '#E1F7EE'
}


const generalStyles = {
    //font sizes
    smallFont : {
      fontSize : 14,
    },
    mediumFont : {
      fontSize: 16,
    },
    bigFont : {
      fontSize : 20,
    },
    giantFont : {
      fontSize : 25,
    },
    //text decoration
    textLink:{
      color:colors.link,
      fontWeight:'bold',
    },

    //color themes
    screenBackground:{
      backgroundColor : colors.lightPurple,
    },
    tabBackground : {
      backgroundColor : colors.vampire,
    },
    tabTextColor : {
      color : colors.lightPurple,
    },

    //container
    genericScreenContainer : {
      flex : 1,
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor : colors.lightPurple,
      padding:15,
    }
}

const regularIcon = 35;
const smallIcon = 25;
const bigIcon = 45;

export {
  colors,
  generalStyles,
  regularIcon,
  smallIcon,
  bigIcon
}