const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const app = express();
app.use(express.json());

app.get('/tasks', async (req, res) => {
  const snapshot = await db.collection('tasks').get();
  const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = req.body;
  await db.collection('tasks').add(task);
  res.status(201).send(task);
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  await db.collection('tasks').doc(id).update(task);
  res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await db.collection('tasks').doc(id).delete();
  res.status(204).send();
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
