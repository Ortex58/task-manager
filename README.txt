1. Для того, щоб почати роботу потібно створити базу даних в phpmyadmin з назвою registration.
2. Далі потрібно створити поля 
id
username  -  varchar(100)
email  -  varchar(100)
password  -  varchar(100)

їх також можна створити скріптом :

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

3. Готово. тепер можна запускати сервер і користуватись. Дякую.