<?php

$data = [];

$fp = fopen('bitcoin_exchange.csv', 'r');
while (($csv = fgetcsv($fp)) !== FALSE) {
    $data[] = [
        'id'       => $csv[0],
        'name'     => $csv[1],
        'buy'      => $csv[2],
        'datetime' => $csv[3],
    ];
}
fclose($fp);

var_dump($data);

$zaif      = [];
$bitflyer  = [];
$coincheck = [];
