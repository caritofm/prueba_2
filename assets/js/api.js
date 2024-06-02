export const getComic = async() => {
    try{
        const comic = await fetch("https://api-comicmarvel.onrender.com");
        

        const data = await comic.json();
        

        return data;

    }catch {
        console.log(`El error es ${error}`);
    }

}


getComic()
  .then((comic) => {
    console.log(comic);
  })

  .catch((error)=>{
    console.log(`El error es : ${error}`);
  })


  export const getDc = async() => {
    try{
        const dc = await fetch("https://sumativa2-6uzm.onrender.com/");
        

        const data = await dc.json();
        

        return data;

    }catch {
        console.log(`El error es ${error}`);
    }

}


getDc()
  .then((dc) => {
    console.log(dc);
  })

  .catch((error)=>{
    console.log(`El error es : ${error}`);
  })

