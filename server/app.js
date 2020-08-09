const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const rootRouter = require('./routes');

app.use(cors());
app.use(express.json({ extended: true }));
app.use('/api', rootRouter);

const PORT = config.get('port');

async function start() {
  try {
    await mongoose.connect(config.get('mongoURL'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => {
      console.log(`app has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(`Server Error`, e.message);
    process.exit(1);
  }
}

start();
