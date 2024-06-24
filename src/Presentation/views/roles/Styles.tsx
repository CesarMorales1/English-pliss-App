import { StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";

const RegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.tertiary,
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.8,
    bottom: "30%", //que tenga un margen hacia abajo de un 30%
  },
  form: {
    width: "100%",
    height: "78%",
    backgroundColor: MyColors.secondary,
    position: "absolute", //se coloca encima del fondo
    bottom: 0, //cero es igual a la posicion mas abajo que hay
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    paddingTop: 20,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 28,
    //paddingBottom: 10,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  formSelect: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 5,
  },
  formPicker: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    height: 40,
  },
  titlePickerItem: {
    borderRadius: 10,
    borderWidth: 1,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterStyles;
