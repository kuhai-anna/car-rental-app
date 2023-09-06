import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <aside>
        <nav>
          <NavLink to="/">CarRental</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favorite</NavLink>
        </nav>
        <p>&copy; 2023 | Developed by Anna Kuhai</p>
      </aside>
      <Suspense fallback={<Loader size={'75vh'} />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
