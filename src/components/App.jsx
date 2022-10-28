import { Layout } from './Layout/Layout';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { SubTitle, Title } from './Title/Title';

export const App = () => {
  return (
    <>
      <Layout>
        <Title>Phone Book</Title>
        <ContactsForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactsList />
      </Layout>
    </>
  );
};
