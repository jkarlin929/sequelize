const { sequelize } = require('./models');

const main = async () => {
  await sequelize.sync({force: true});
  //(Force) Sync all models that aren't already in the database
  process.exit();
}

main();
