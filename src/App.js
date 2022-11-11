import {Route, Routes} from 'react-router-dom';
import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import AboutUs from './page/AboutUs';
import { Helmet } from 'react-helmet';

import LipsDetailProduct from './detailpage/LipsDetailProduct';
import FaceDetailProduct from './detailpage/FaceDetailProduct';
import CheckDetailProduct from './detailpage/CheeksDetailProduct';
import EyesDetailProduct from './detailpage/EyesDetailProduct';
import Recommendation from './page/Recommendation';
import Wishlist from './page/Wishlist';

import LipsDetailPage from './page/LipsDetailPage';
import FaceDetailPage from './page/FaceDetailPage';
import CheeksDetailPage from './page/CheeksDetailPage';
import EyesDetailPage from './page/EyesDetailPage';
import RecommendationDetailProduct from './detailpage/Recommendation';

function App() {

  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Beautyou</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Routes>
      <Route path='/' element={<LoginPage />}/>
      <Route path='/Home' element={<HomePage />} />
      <Route path='/About/Us' element={<AboutUs />} />
      <Route path='/Lips/Detail' element={<LipsDetailPage />} />
      <Route path='/Face/Detail' element={<FaceDetailPage />} />
      <Route path='/Cheeks/Detail' element={<CheeksDetailPage />} />
      <Route path='/Eyes/Detail' element={<EyesDetailPage />} />
      <Route path='/Detail/Lips/Product/:id' exact element={<LipsDetailProduct />} />
      <Route path='/Detail/Face/Product/:id' exact element={<FaceDetailProduct />} />
      <Route path='/Detail/Cheeks/Product/:id' exact element={<CheckDetailProduct />} />
      <Route path='Detail/Eyes/Product/:id' exact element={<EyesDetailProduct />} />
      <Route path='/Wishlist' exact element={<Wishlist />} />
      <Route path='/Recommendation' exact element={<Recommendation />} />
      <Route path='/Detail/Recommendation/:id' exact element={<RecommendationDetailProduct/>} />
    </Routes>
    </>
  );
}

export default App;
