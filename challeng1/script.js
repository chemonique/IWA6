const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = !isNaN(primaryPhone) && typeof primaryPhone === 'string';
const secondaryValid = !isNaN(secondaryPhone) && typeof secondaryPhone === 'string';

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid);

// !isNaN(primaryPhone) checks if primaryPhone is not NaN, which indicates if it can be parsed as a valid number.
// typeof primaryPhone === 'string' checks if primaryPhone is a string.
// Similarly, !isNaN(secondaryPhone) checks if secondaryPhone is not NaN, and typeof secondaryPhone === 'string' checks if secondaryPhone is a string.
// This way, primaryValid and secondaryValid will only be true if the corresponding phone numbers are valid numerical strings, based on the given criteria.
