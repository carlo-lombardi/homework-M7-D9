import { Fragment ,useState, useEffect } from 'react';
import axios from "axios"
import { SearchResult, Album } from '../typings';

// interface result {
//   id: string;
//   album: string;
//   title: string;
// }

function SearchEngine(/* props: result */){

  const [data, setData] = useState<SearchResult[]>([]) //useState({ result: [] });
  const [query, setQuery] = useState<any>()

  //const [favAlbums, setFavAlbums] = useState<Album[]>([])

  //console.log(favAlbums[0].id)
  
  useEffect(() => {
    const fetchData = async () => {
      const {data: {data}} = await axios(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`,
      );
      setData(data);
      console.log("asdasd", data);
    };
    fetchData();
  }, [query]);
  console.log("data2",data)
  console.log("query",query)

  return( 
    <>
      <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div>
        {data.map((result, id) => (
          <div key={id}>
            <a href={result.preview}><img src={ result.artist.picture_small} /></a>
          </div>
        ))}
      </div>
    </Fragment>
    </>
  )
}

export default SearchEngine