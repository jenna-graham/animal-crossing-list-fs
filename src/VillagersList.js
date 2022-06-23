import React from 'react';
import Villager from './Villager';

export default function VillagersList({ villagers }) {
  console.log(villagers);
  return (
    <div>
      { 
        villagers.map((villager, i) => {
          return <Villager {...villager} key={villager.UniqueEntryID + i} />;
        })
      }
    </div>
  );
}
