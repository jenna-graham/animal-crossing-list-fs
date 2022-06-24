import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getVillagerById } from './services/fetch-utils';

export default function DetailPage() {
  const params = useParams();
  const [villager, setVillager] = useState({});
  const [imageURL, setImageUrl] = useState(null);
  

  useEffect(() => {
    async function fetchDetails() {
      const data = await getVillagerById(params.id);
      setVillager(data);
    }
    fetchDetails();
  }, [params.id]);

  useEffect(() => {
    if (villager.image) {
      const image = villager.image;
      const urlA = image.replace('=IMAGE("', '');
      const finalUrl = urlA.replace('")', '');
      setImageUrl(finalUrl); 
    } 
  }, [villager]);


  return (
    <>
      <Link to='/'>Home</Link>
      <div className="villager-detail">
        <h5>{villager.Name}</h5>
        <img className="detail-image" src={imageURL}></img>
        <h3> the {villager.Species}</h3>
        <p><b>Gender: </b>{villager.Gender}</p>
        <p> <b>Saying:</b> `{villager.saying}`</p>
        <p><b>Born on: </b> {villager.Birthday} </p>
        <p><b>Personality:</b> {villager.Personality}</p>
        <p><b>Favorite Song:</b> {villager.Song}</p>
        <p><b>Loves </b>{villager.Hobby}</p>
        <p><b>Catchphrase:</b> {villager.Catchphrase}</p>
      </div>
    </>
  );
}
