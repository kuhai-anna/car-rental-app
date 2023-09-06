import { LoadMoreBtn } from 'components/Buttons/LoadMoreBtn/LoadMoreBtn';
import { CarList } from 'components/CarList/CarList';
import { Filters } from 'components/Filters/Filters';
import { Section } from 'components/Section/Section';

const Favorites = () => {
  return (
    <Section>
      <h1>Сatalog of cars for rent</h1>
      <Filters />
      <h2>List of cars</h2>
      <CarList />
      <LoadMoreBtn />
    </Section>
  );
};

export default Favorites;
