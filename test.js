import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('api_form' , 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

