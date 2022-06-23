import React from 'react';
import { useState, useEffect } from 'react';
import { getVillagersData } from './services/fetch-utils';
import VillagersList from './VillagersList';

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
  });

    
  return (
    <div>
      <h2>Current Page {page}</h2>
      <div className="'buttons">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <VillagersList villagers={villagers} />
        
    </div>
  );
}
