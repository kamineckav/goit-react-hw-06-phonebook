export const getAllContacts = store => store.contacts;
export const getFilteredContacts = store => {
  const { contacts, filter } = store;

  if (!filter) {
    return contacts;
  }

  const normolizedTarget = filter.toLowerCase();

  const filteredContats = contacts.filter(({ name }) => {
    const normalizedName = name.toLowerCase();
    return normalizedName.includes(normolizedTarget);
  });

  return filteredContats;
};
