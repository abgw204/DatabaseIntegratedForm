<?php


$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'form';

$conexao = new mysqli($dbHost,$dbUsername,$dbPassword,$dbName);

if($conexao->connect-errno)
{
    echo "Erro";
}
else
{
    echo "Conexão efetuada com sucesso";
}
?>