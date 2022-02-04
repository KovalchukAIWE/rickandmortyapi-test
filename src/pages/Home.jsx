import { useState, useEffect } from 'react';
import List from "../components/List";
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [search, setSearch] = useState("");
  let { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.header}>Rick & Morty</Link>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className={styles.list}>
        <List page="/" results={results}/>
      <div>
      </div>
      </div>
      <div className={styles.pagination}>
        <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} info={info}/>
      </div>
    </div>
  )
}

export default Home;