import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { CarList } from 'components/CarList/CarList';
import { Filters } from 'components/Filters/Filters';
import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { Loader } from 'components/Loader/Loader';
import { selectError, selectIsLoading } from 'redux/cars/selectors';
import { fetchCars } from 'redux/cars/operations';

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {isLoading && !error && <Loader />}
      <Section>
        <h1>Сatalog of cars for rent</h1>
        <Filters />
        <h2>List of cars</h2>
        <CarList />
        <LoadMoreBtn />
      </Section>
    </>
  );
};

export default Catalog;
