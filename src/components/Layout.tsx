import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="pt-10 pb-10">
      <Outlet />
    </div>
  );
};

export default Layout;
