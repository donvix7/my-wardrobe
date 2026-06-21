import { StyleSheet } from "react-native";

export const colors = {
  background: "#05356cff",
  header: "#004797ff",
  primary: "#0052cdff",
  text: "#ffffff",
  textSecondary: "#c9d5edff",
  accent: "#6e90b7ff",
  alert: "#D32F2F",
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 60,
    paddingHorizontal: 20,
    color: "white",
    height: "100%",
  },
  subContainer: {
    color: "white",
    height: "100%",
    gap: 10,
  },
  textarea: {
    backgroundColor: colors.textSecondary,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "flex-start",
    marginTop: 10,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    height: "auto",
  },
  card: {
    backgroundColor: colors.header,

    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  previewCard: {
    backgroundColor: colors.header,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  previewCardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#2660adff",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  subTitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  input: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 200,
    height: "100%",
    gap: 20,
    textAlign: "center",
  },
  header: {
    padding: 20,
    borderRadius: 10,
    alignItems: "flex-start",
    marginVertical: 20,
    gap: 10,
  },
  date: {
    paddingHorizontal: 5,
    alignItems: "flex-end",
    fontWeight: "bold",
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 20,
    paddingHorizontal: 20,
    color: colors.textSecondary,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  empty: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    color: colors.text,
    fontWeight: "bold",
    marginTop: 20,
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  pickerItem: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
  },
  pickerContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  picker: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: colors.accent,
  },
  grid: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  gridItem: {
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.header,
  },
  wardrobeCardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#2660adff",
  },
});
