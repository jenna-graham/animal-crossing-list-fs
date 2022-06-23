import { checkError, client } from './client.js';
export async function getVillagersData(from = 0, to = 25) {
  const response = await client.from('villagers').select().range(from, to);
  return checkError(response);
}