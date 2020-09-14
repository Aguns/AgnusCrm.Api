CREATE TABLE user (
    `id` INT NOT NULL auto_increment PRIMARY KEY,
    `username` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `firstName` VARCHAR(100) NULL,
    `lastName` VARCHAR(100)  NULL,
    `email` VARCHAR(100)  NULL,
    `phoneNumber` VARCHAR(100)  NULL,
    `password` VARCHAR(100) NOT NULL,
    `confirmPassword` BIT NOT NULL,
    `inactive` BIT NOT NULL,
    `country` VARCHAR(10) Null,
    `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO `user` (`id`, `username`, `name`, `firstName`, `lastName`, `email`, `phoneNumber`,
     `password`, `confirmPassword`, `inactive`, `country`, `created_at`) 
     VALUES ('1', 'gmahota', 'Guimarães Mahota', 'Guimarães Mendes', 'Lucas Mahota Júnior', 
     'guimaraesmahota@gmail.com', '+258849535156', '123456', b'0', b'1', 'Mz', CURRENT_TIMESTAMP);