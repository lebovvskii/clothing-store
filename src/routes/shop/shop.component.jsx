import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import { Category } from "../category/category.component";
import { setCategories } from "../../store/categories/category.action";

export const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      console.log(categoriesArray);
    };   
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
