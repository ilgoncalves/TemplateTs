import axios from 'axios';

export const getCardFlag = (cardnumber: string) => {
  cardnumber = cardnumber.replace(/[^0-9]+/g, '');

  var cards = {
    visa: /^4[0-9]{12}(?:[0-9]{3})/,
    mastercard: /^5[1-5][0-9]{14}/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
    amex: /^3[47][0-9]{13}/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})/,
    elo: /^((((636368)|(438935)|(504175)|(451416)|(636297))\d{0,10})|((5067)|(4576)|(4011))\d{0,12})/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    aura: /^(5078\d{2})(\d{2})(\d{11})$/,
  };

  for (var flag in cards) {
    if (cards[flag].test(cardnumber)) {
      return flag;
    }
  }

  return false;
};

export const getAddressByCEP = async (cep: number) => {
  const URL = 'https://apps.widenet.com.br/busca-cep/api/cep.json';
  try {
    const { data } = await axios.get(URL, {
      params: {
        code: cep,
      },
    });
    if (data.status === 200) {
      const { code, state, city, district, address } = data;
      return {
        cep: code,
        state,
        city,
        district,
        street: address,
      };
    } else if (data.status >= 400) {
      throw new Error(data.message);
    } else {
      throw new Error('Erro ao buscar CEP');
    }
  } catch (err) {
    console.log({ err, msg: 'erro ao buscar CEP' });
    if (err.message) {
      throw new Error(err.message);
    } else {
      throw new Error('Algo deu errado ao buscar CEP');
    }
  }
};

export const isValidDate = (dateString: string) => {
  // First check for the pattern
  if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
    return false;

  // Parse the date parts to integers
  var parts = dateString.split("/");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10);
  var year = parseInt(parts[2], 10);

  // Check the ranges of month and year
  if (year < 1000 || year > 3000 || month == 0 || month > 12)
    return false;

  var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Adjust for leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    monthLength[1] = 29;

  // Check the range of the day
  return day > 0 && day <= monthLength[month - 1];
};

export const validateTextValue = (text: string) => {
  if (
    text === null ||
    text === undefined ||
    typeof text !== 'string' ||
    text.trim() === ''
  ) {
    return false;
  }
  return true;
};
