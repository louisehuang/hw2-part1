export const COLORS = {
    background:"lavender",
    text:'rebeccapurple',
    header:'darkslateblue',
    grey:'grey',
    darkgray: "darkgray",
    showdow:"'c0c0c0'",
    button: 'firebrick',
    icon:'gold'
  
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

      buttonsContainer: { flexDirection: "row" },
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
    
    };