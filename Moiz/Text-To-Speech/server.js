const cors = require('cors');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('port', PORT);
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/quote', (req, res) => {
      content="I do not know where family doctors acquired illegibly perplexing handwriting; nevertheless, extraordinary pharmaceutical intellectuality, counterbalancing indecipherability, transcendentalizes intercommunications’ incomprehensibleness."
      return (content)
        ? res.json({ status: 'success', data: { content } })
        : res.status(500).json({ status: 'failed', message: 'Could not fetch quote.' });
});

app.listen(PORT, () => console.log(`> App server is running on port ${PORT}.`));