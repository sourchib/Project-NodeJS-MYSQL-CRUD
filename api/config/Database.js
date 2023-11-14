import {Sequelize} from "sequelize";

const db = new Sequelize('pijarcamp','root','swerr',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;