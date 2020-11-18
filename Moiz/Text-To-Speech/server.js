const cors = require('cors');
const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('port', PORT);
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/quote', (req, res) => {
      content="भारत के अमर शहीदों में सरदार भगत सिंह का नाम सबसे प्रमुख रूप से लिया जाता है। जिस दिन भगत सिंह पैदा हुए उनके पिता एवं चाचा को जेल से रिहा किया गया।"
      return (content)
        ? res.json({ status: 'success', data: { content } })
        : res.status(500).json({ status: 'failed', message: 'Could not fetch quote.' });
});

app.listen(PORT, () => console.log(`> App server is running on port ${PORT}.`));