import { createHashRouter } from 'react-router-dom';
import Questions from './components/Questions';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import FinalPage from './components/FinalPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      {
        path: '/vue/correct',
        element: <FinalPage />,
      },
    ],
  },
]);
