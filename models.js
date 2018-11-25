const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'sequelize_lesson',
  dialect: 'postgres',
});

const Artist = sequelize.define('artist', {
  name: Sequelize.STRING
});

const Record = sequelize.define('record', {
  title:            Sequelize.STRING,
  year:             Sequelize.INTEGER,
  cover_image_url:  Sequelize.STRING,
});

// The onDelete: cascade bit here deletes the records an artist has
// if an artist is deleted. This avoids us having to delete the records
// first, then deleting the artist.
Artist.hasMany(Record, {onDelete: 'cascade'});

Record.belongsTo(Artist);
