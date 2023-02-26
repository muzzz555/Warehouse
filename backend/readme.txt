npm install -g sequelize-cli

sequelize --help
sequelize init

###
config .sequelizerc file

sequelize model:generate --name Products --attributes "name:string, image:string, price:integer, stock:integer " --underscored true
=> gen table Products column = name:string, image:string, price:integer, stock:integer  and have _name of column

sequelize db:migrate
=> create dev.sqlite3 from  file in folder migrations

sequelize seed:generate --name seed-product
=> create file in folder seeder for seed data in database

sequelize db:seed:all
=> seed data in to database