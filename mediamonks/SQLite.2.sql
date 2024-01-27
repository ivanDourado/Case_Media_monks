CREATE TABLE tabela_unificada AS
SELECT
    f1.data,
    f1.id_marca,
    f1.vendas,
    f1.valor_do_veiculo,
    f1.nome,
    f2.marca
FROM fixed_database_1 AS f1
inner JOIN fixed_database_2 AS f2
ON f1.id_marca = f2.id_marca;
