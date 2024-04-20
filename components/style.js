import { StyleSheet } from "react-native";

// custom color palette
const colors = {
  primary: "#FFFFFF", // White
  secondary: "#DCE6E8", // Light gray
  background: "#1F2A2D", // Dark blue-gray
  text: "#0080AA", // Dark blue
  button: "#FFD027", // Yellow
  error: "#DC3545", // Red
};

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.button,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    flex: 1,
    width: "100%",
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    backgroundColor: colors.button,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
  },
});

const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.button,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: colors.error,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: colors.button,
    marginLeft: 50,
  },
});

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.text,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.button,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 16,
  },
  error: {
    color: colors.error,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
  },
  link: {
    color: colors.button,
    marginLeft: 50,
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: colors.button,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export {
  stylesHome,
  stylesCamera,
  stylesSignIn,
  stylesSignUp,
  stylesImageScreen,
};
