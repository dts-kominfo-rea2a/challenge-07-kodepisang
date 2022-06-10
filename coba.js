const promiseTheaterIXX = async () => {
    await new Promise((r) => setTimeout(r, 200));
  
    return new Promise((resolve) => {
      const hasilSetelahMenonton = [
        {
          namaFilm: 'World of the married',
          hasil: 'marah',
        },
        {
          namaFilm: 'Inside Out',
          hasil: 'tidak marah',
        },
        {
          namaFilm: 'Nanti Kita Cerita Tentang Hari Ini',
          hasil: 'marah',
        },
      ];
  
      return resolve(hasilSetelahMenonton);
    });
  };
  
  const promiseTheaterVGC = async () => {
    await new Promise((r) => setTimeout(r, 200));
  
    return new Promise((resolve) => {
      const hasilSetelahMenonton = [
        {
          namaFilm: 'KKN di Desa Penari',
          hasil: 'marah',
        },
        {
          namaFilm: 'Kukira Kau Rumah',
          hasil: 'tidak marah',
        },
        {
          namaFile: 'The Other Side',
          hasil: 'marah',
        },
      ];
  
      return resolve(hasilSetelahMenonton);
    });
  };
  console.log(await promiseTheaterIXX());
  const promiseOutput = async (emosi) => {
    let theater1 = await promiseTheaterIXX();
    let theater2 = await promiseTheaterVGC();
    let theater = theater1.concat(theater2);
    console.log(theater);
    let totalEmosi = 0;
    theater.map(result => result.hasil === emosi && (totalEmosi += 1) )
    return totalEmosi
  };

  (async () => {
    console.log(await promiseOutput("tidak marah")); // Output: 2
    console.log(await promiseOutput("marah")); // Output: 4
  })();

