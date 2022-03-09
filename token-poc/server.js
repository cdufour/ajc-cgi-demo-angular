const express = require('express');
const cors = require('cors');
const app = express();

// ajoute les CORS headers à toutes les réponses du serveur
app.use(cors());

// simule un stockage backend d'un token
// généré et fourni au client
const token = "ABC_abc_123";

app.post('/login', (req, res) => {
  // login réussi
  res.set('Access-Control-Expose-Headers', 'X-Token');

  // on envoie le token au client
  res.set('X-Token', token);
  res.json({login: true});
})

app.get('/private', (req, res) => {
  const clientToken = req.get('X-Token');
  if (clientToken === token) {
    res.json({ access: true });
  } else {
    res.json({ access: false });
  }
})

app.listen(3000, () => {
  console.log("'Serveur express écoutante le port 3000");
})