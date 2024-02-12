export const COLORS = {
    background:"lavender",
    text:'rebeccapurple',
    header:'darkslateblue',
    headerText: 'white',
    grey:'grey',
    button: 'firebrick',
    icon:'gold',
    inputText: 'mediumpurple'
    

  
  };
  export const LOCATION = {
    center: "center",
    left: "left",
  
  };
  
    export const COMMON_STYLES = {

      container: {
        flex: 1,
        justifyContent: LOCATION.center,
        backgroundColor: COLORS.background,
        //paddingHorizontal: 20
      },

      specialContainer: {
        flex: 1,
        marginTop:20,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      inputContainer: {
        marginVertical: 10,
        padding: 10,
        marginHorizontal: 5,
        borderWidth: 2,
        borderBlockColor: COLORS.text,
        borderRadius: 7
      },

      buttonsContainer: { 
        padding: 40,
        marginHorizontal: 20,
        marginVertical: 20,
        marginRight: 0,
        flexDirection: "row" },
      buttonView: {
        width: "35%",
        margin: 5,
      },
      topView: {
        flex: 1,
        alignItems: LOCATION.center,
        backgroundColor: COLORS.background,
        justifyContent: LOCATION.center,
      },
      bottomView: {
        flex: 1,
        justifyContent: LOCATION.center,
        alignItems: LOCATION.center,
      },
      labelText: {
        color: COLORS.text,
        fontSize: 15,
        marginTop: 5,
        marginHorizontal:5,
        fontWeight: 'bold'
      },
      inputText: {
        color: COLORS.inputText,
        fontSize: 15,
        marginTop: 5,
        marginHorizontal:5,
        fontWeight: 'bold'
      },
      activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'darkslateblue ',
        backgroundColor:'darkslateblue',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        width: '90%',
      },
      iconInfo: {
        flexDirection: 'row',
        backgroundColor: 'darkslateblue ',
        padding: 5,
        marginHorizontal:5,
        marginRight: 3,
        justifyContent: 'flex-end'
      },
      activityInfo: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        marginHorizontal:3,
        //marginRight: 4,
        justifyContent: 'flex-end'
      },
      activityText: {
        fontSize: 15,
        color: 'mediumpurple',
        marginRight: 10,
        fontWeight: 'bold',
      },
      activityInfoText: {
        fontSize: 15,
        color:'mediumpurple',
        fontWeight: 'bold',
      },
      input: {
        borderBottomColor: COLORS.test,
        fontSize: 18,
        color: COLORS.header,
        paddingVertical: 5,
      },
    
    };