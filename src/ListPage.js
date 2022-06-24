import React from 'react';
import { useState, useEffect } from 'react';
import { getVillagersData } from './services/fetch-utils';
import VillagersList from './VillagersList';
import Sound from './Sound';

export default function ListPage() {
  const [villagers, setVillagers] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 25;

  async function fetchVillagers() {
    const from = page * perPage - perPage;
    const to = page * perPage;
    const villagers = await getVillagersData(from, to);

    setVillagers(villagers);
  }

  useEffect(() => {
    fetchVillagers();
  }, [page]);

    
  return (
    <div>
      <h1>Animal Crossing Villagers</h1>
      <div><Sound /></div>
      <h2> Page {page}</h2>
      <div className="buttons">
        <button className="page-button" disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button className="page-button" onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <VillagersList villagers={villagers} />
        
    </div>
  );
}
