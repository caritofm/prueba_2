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

