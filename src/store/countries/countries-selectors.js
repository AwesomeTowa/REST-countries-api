export const selectCountriesInfo = state => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
  return state.countries.list.filter(
    country =>
      country.name.toLowerCase().includes(search.toLocaleLowerCase()) &&
      country.region.includes(region)
  );
};
