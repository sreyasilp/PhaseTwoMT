const Sequelize = require("sequelize");
const db = require("../config/database");

const Visit = db.define("visitapp", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  customer_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact_person: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  contact_no: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  intrested_product: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  visit_subject: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  visit_date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  is_disabled: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
  
});

module.exports = Visit;
