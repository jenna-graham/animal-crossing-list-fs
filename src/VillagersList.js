import React from 'react';
import Villager from './Villager';

export default function VillagersList({ villagers }) {
  return (
    <div className='villager-list'>
      { 
        villagers.map((villager, i) => {
          return <Villager {...villager} key={villager.UniqueEntryID + i} />;
        })
      }
    </div>
  );
}
