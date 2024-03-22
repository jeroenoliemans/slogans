```shell
docker container run --name mysql_slogans --publish 3306:3306 --env MYSQL_ROOT_PASSWORD=slogan --detach mysql
```

connect to db
`mysql -u root -p slogans`

```sql
create database slogans;

create table slogan (
 id int(3) unsigned zerofill not null auto_increment primary key,
 slogan varchar(250) not null
 themeId int(3) default 1
);

insert into slogan set slogan = 'Save the earth';

create table theme (
  id int(3) unsigned zerofill not null auto_increment primary key,
  label varchar(100) not null,
  fontColor varchar(100) not null,
  backgroundColor varchar(100) not null,
  backgroundColorLeft varchar(100) not null,
  backgroundColorRight varchar(100) not null,
  borderColor varchar(100) not null
);

insert into theme (label, fontColor, backgroundColor, backgroundColorLeft, backgroundColorRight, borderColor)
values ('Default', 'black', 'lightgrey', 'darkgrey', 'white', 'darkgray'); 
```

##DBeaver
set connection -> driver properties "allowPublicKeyRetrieval" to true and "useSSL" to false
