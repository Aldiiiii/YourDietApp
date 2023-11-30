import { NavigationContainer } from "@react-navigation/native";
import Register from "./pages/Register";
import MainTab from "./navigator/MainTab"
import MainStack from "./navigator/MainStack";
import News from "./pages/News";
import First from "./components/news/First";


export default function App() {
  return (
    <NavigationContainer>
      {/* <Register /> */}
      <MainStack />
      {/* <First /> */}
      {/* <News /> */}
      {/* <MainTab /> */}
    </NavigationContainer>
  );
}