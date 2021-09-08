import Section from "../Components/Section";
import Form from "../Components/Form";
import ContactsList from "../Components/ContactsList";
import ContactsListItem from "../Components/ContactsListItem";
import Filter from "../Components/Filter";

const ContactsPage = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList>
          <ContactsListItem />
        </ContactsList>
      </Section>
    </>
  );
};
export default ContactsPage;