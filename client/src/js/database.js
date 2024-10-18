import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  console.error('putDb not implemented');
const contactDb = await openDB('jate', 1);
const tx = contactDb.transaction('jate', 'readwrite');
const store = txobjectStore('jate');
const request = store.add({ content });
const result = await request;
console.log('result.value', result);
return result;
};

export const getDb = async () => { 
  console.error('getDb not implemented');
  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readonly');
  const store = txobjectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();