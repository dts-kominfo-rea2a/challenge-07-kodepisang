const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput =  async (emosi) => {
  let theater1 = await promiseTheaterIXX();
  let theater2 = await promiseTheaterVGC();
  let theater = theater1.concat(theater2);
  // console.log(theater);
  let totalEmosi = 0;
  theater.filter((result) => {
    return result.hasil === emosi && (totalEmosi += 1);
  } )
  return totalEmosi
};

module.exports = {
  promiseOutput,
};
