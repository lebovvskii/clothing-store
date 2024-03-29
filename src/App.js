import Home from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import { Authentication } from "./routes/authentication/authentication.component";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";

import { checkUserSession } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrentUser } from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop/*" element={<Shop />}></Route>
        <Route path="/auth" element={<Authentication />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
