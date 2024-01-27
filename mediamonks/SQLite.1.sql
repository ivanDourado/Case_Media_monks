-- deleta tabela caso exista 
DROP TABLE IF EXISTS 'fixed_database_2';
-- cria tabela caso não exista
CREATE TABLE IF NOT EXISTS 'fixed_database_2' (c1 INTEGER,c2 TEXT);
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('1', 'Fiat');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('2', 'Volkswagen');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('3', 'Kia');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('4', 'Peugeot ');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('5', 'Toyota');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('6', 'Nissan');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('7', 'Mitsubishi');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('8', 'Subaru');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('9', 'Chevrolet ');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('10', 'JaC Motors');
INSERT INTO 'fixed_database_2' (c1, c2) VALUES ('11', 'Renault');

-- alterar nome da coluna 
ALTER TABLE 'fixed_database_2' RENAME COLUMN c1 TO id_marca;
ALTER TABLE 'fixed_database_2' RENAME COLUMN c2 TO marca;
