const required = value => (value ? undefined : "This filed is required");
const maxLength = max => value =>
  value && value.length > max
    ? `This filed maximum length ${max} characters`
    : undefined;

const minLength = min => value =>
  value && value.length < min
    ? `This filed minimum length ${min} characters`
    : undefined;

const maxLength15 = maxLength(15);

const number = value =>
  value && isNaN(Number(value)) ? "This filed must be number" : undefined;
const minValue = min => value =>
  value && value < min
    ? `This filed minimum length ${min} characters `
    : undefined;
const minValue18 = minValue(18);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const maxValue = max => value =>
  value && value > max ? `Must be maximm ${max}` : undefined;

const tooOld = value =>
  value && value > 65 ? "You might be too old for this" : undefined;
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? "Really? You still use AOL for your email?"
    : undefined;

export default {
  required,
  maxLength,
  minLength,
  number,
  minValue,
  email,
  maxValue,
  tooOld,
  aol
};
