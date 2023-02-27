npm install -g sequelize-cli
################################
sequelize --help
sequelize init

###################################################
config .sequelizerc file

sequelize model:generate --name Products --attributes "name:string, image:string, price:integer, stock:integer " --underscored true
=> gen table Products column = name:string, image:string, price:integer, stock:integer  and have _name of column

sequelize db:migrate
=> create dev.sqlite3 from  file in folder migrations

sequelize seed:generate --name seed-product   (มีแล้วไม่ต้องสั่ง)
=> create file in folder seeder for seed data in database
####################################################
sequelize db:seed:all
=> seed data in to database

sequelize db:seed:undo:all     :all is option
=> down data in table

sequelize db:migrate:undo:all   :all is option
=> drop table ทั้งหมด

###################################
 "development": {
  "storage": "./dev.sqlite3",
   "dialect": "sqlite"
 }
######################################
sequelize db:migrate --env test
=> run env test

equelize db:seed:all --env test
