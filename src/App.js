import { Provider } from "react-redux";
import Header from "./components/header/Header";
import Wrapper from "./components/wrapper/Wrapper";
import { store } from "./redux/store";
import MainNavigator from "./screens/MainNavigator";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <MainNavigator />
      </Wrapper>
    </Provider>
  );
}

export default App;
