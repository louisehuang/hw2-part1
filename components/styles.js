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
    top:'flex-start'
  
  };
  
    export const COMMON_STYLES = {

      container: {
        flex: 1,
        justifyContent: LOCATION.center,
        backgroundColor: COLORS.background,
      },
      addAcvityContainer: {
        flex: 1,
        marginTop:20,
        justifyContent: LOCATION.top,
        padding: 10,
      },

      specialContainer: {
        flex: 1,
        marginTop:20,
        justifyContent: LOCATION.top,
        alignItems: LOCATION.center,
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
        padding: 30,
        marginHorizontal: 20,
        marginVertical: 20,
        marginRight: 0,
        width:'90%',
        flexDirection: "row", 
        justifyContent: "space-around",
        columnGap: 50
    
      },
      buttonView: {
        width: "45%",

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
        fontWeight: 'bold',
      },
      inputText: {
        color: COLORS.inputText,
        fontSize: 12,
        marginTop: 5,
        marginHorizontal:5,
        fontWeight: 'bold'
      },
      activityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.header,
        backgroundColor:COLORS.header,
        borderRadius: 10,
        padding: 8,
        //marginBottom: 5,
        width: '95%',
        marginLeft: 10,
        justifyContent: "space-between",
        
      },
      activityInfoContainer:{
        flexDirection: 'row',
        backgroundColor:COLORS.header, 
        //columnGap: 5,
        marginLeft: 10,

      },
      activityInfo: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 5,
        marginRight:5,
        minWidth: 80,
        justifyContent: 'center' 
      },
      activityText: {
        fontSize: 15,
        color: COLORS.inputText,
        marginRight: 10,
        fontWeight: 'bold',
      },
      activityInfoText: {
        fontSize: 15,
        color:COLORS.header,
        fontWeight: 'bold',
      },
      input: {
        borderBottomColor: COLORS.test,
        fontSize: 1,
        color: COLORS.header,
        paddingVertical: 5,
      },
      resetButton: {
        backgroundColor: COLORS.button,
        width: "92%",
      },
      startButton: {
        backgroundColor: "darkslateblue",
        width: "45%",
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
      },
      dropdownText: {
        color: COLORS.header,
        fontSize: 12,
      },
      addButton: {
        backgroundColor: null,
        paddingRight: 15,
        fontSize: 25,
        color:'white'
      },
      //actvitypressable
      pressableContainer:{
        flexDirection: 'row',
        borderColor: COLORS.background,
        backgroundColor:'transparent'
          
        },
      cancelButton: {
        backgroundColor: COLORS.button,
        width: "45%",
      },
      saveButton: {
        backgroundColor: "darkslateblue",
        width: "45%",
      },
      
      deleteButton: {
        backgroundColor: null,
        paddingRight: 20,
      },
      bottomContainer: {
        flexDirection: "column",
        marginHorizontal: 20,
        justifyContent: LOCATION.center,
      },
      checkboxContainer: {
        flexDirection: "row",
        width:'90%',
        justifyContent: "space-between",
      },

      
    
    };

