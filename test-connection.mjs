import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from './serviceAccountKey.json' assert { type: 'json' };

try {
  initializeApp({
    credential: cert(serviceAccount)
  });

  const db = getFirestore();
  const collections = await db.listCollections();
  console.log('Successfully connected to Firestore. Collections:', collections.map(c => c.id));
} catch (error) { 
  console.error('Error connecting to Firestore:', error);
}
