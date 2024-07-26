const AlbumsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'Albums',
  version: '1.0.0',
  register: (server, { service, storageService, validator }) => {
    const albumsHandler = new AlbumsHandler(service, storageService, validator);
    server.route(routes(albumsHandler));
  },
};
