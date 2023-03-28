import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.util';

// import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { fetchCategoriesStart } from '../../store/categories/category.action';

import './shop.styles.scss';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Note: any async thing to be done in a useEffect should be defined as an async function inside the useEffect hook instead of making the callback of the useEffect hook async
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
