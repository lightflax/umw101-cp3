import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#fff'
  },

  /* Buttons----------------------------------- */
  buttonContainerBig: {
    height: 120,
    marginHorizontal: 20,
    padding: 3,
  },
  buttonContainerAction: {
    height: 80,
    marginHorizontal: 20,
    padding: 3,
  },
  buttonView: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(66,80,99,0.6)",

  },
  buttonLabelView: {
    color: "#262626",
    fontSize: 16,
  },
  buttonViewAction: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(66,80,99,0.6)",

  },
  buttonLabelDeleteAction: {
    color: "#262626",
    fontSize: 16,
  },
  buttonDelete: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(150,85,96,0.6)'
  },
  buttonLabelDelete: {
    color: "#262626",
    fontSize: 16,
  },
  buttonDeleteAction: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'rgba(150,85,96,0.6)'
  },


  buttonCreate: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(99,98,76,0.6)",

  },
  buttonLabelCreate: {
    color: "#262626",
    fontSize: 16,
  },
  buttonCreateAction: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(99,98,76,0.6)",
  },
  buttonLabelCreateAction: {
    color: "#262626",
    fontSize: 16,
  },
  buttonUpdate: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(135,152,176,0.6)",
    
  },
  buttonLabelUpdate: {
    color: "#262626",
    fontSize: 16,
  },
  buttonUpdateAction: {
    borderRadius: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(135,152,176,0.6)",
  },
  buttonLabelUpdateAction: {
    fontSize: 16,
    color: "#262626",
  },
  buttonLabel: {
    color: "#000",
    fontSize: 16,
  },
  buttonText: {
    color: "#262626",
    fontSize: 26,
    textAlign: "center",
  },
  /* -------------------------------------------------------- */
  
  posts: {
    backgroundColor: "blue",
    textAlign: "center",
    marginBottom: 10,
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  listText: {
    textAlign: "center",
    fontSize: 20,
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    margin: 4,
    padding: 8,
    borderWidth: 2,
    borderRadius: 4,
  },
  inputFields: {
    marginBottom: 10,
  },
  saView: {
    height: 800,
  },
  /* Modal-------------------------------------------- */

  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: "rgba(66,80,99,0.6)",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  modalTitleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 16,
  },
});

export { styles };
