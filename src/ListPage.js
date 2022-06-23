import React from 'react';
import { useState, } from 'react';
import { getVillagersData } from './services/fetch-utils';
import VillagersList from './VillagersList';

export default function ListPage() {
  const [villagers, setVillagers] = useState([]);
  const [totalVillagers, settotalVillagers] = useState(1);
  const [page, setPage] = useState(1);
  const perPage = 25;

  

    
  return (
    <div>
      <h2>Current Page {page}</h2>
      <div className="'buttons">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}>Next Page</button>
      </div>
      <VillagersList />
        
    </div>
  );
}
