import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  return (
    <>
      <Layout>
        <ContactsForm />
        <Filter />
        <ContactsList />
      </Layout>
    </>
  );
};
