export function isRequired(value) {
  console.log('value', value);
  return !value || !value.toString().trim() ? false : true;
}
