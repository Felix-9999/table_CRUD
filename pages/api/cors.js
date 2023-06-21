const cors = require('cors');

const corsOptions = {
  origin: '*', // Update this to the specific origin you want to allow or '*' to allow all origins
  methods: 'GET, POST, PUT, DELETE', // Add any additional HTTP methods your API supports
  allowedHeaders: 'Content-Type, Authorization', // Add any additional headers your API accepts
};

module.exports = cors(corsOptions);
