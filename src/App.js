import Home from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { SignIn } from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Hey, im shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
