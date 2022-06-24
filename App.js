import ImageScreen from "./screens/ImageScreen";
import ListingScreen from "./screens/ListingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { View } from "react-native";
import Card from "./components/Card";
const image = require("./assets/jacket.jpg");
export default function App() {
  return <ListingScreen title="the red jacket" subTitle="$100" />;
}
