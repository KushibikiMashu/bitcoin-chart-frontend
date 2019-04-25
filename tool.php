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

$zaif      = [];
$bitflyer  = [];
$coincheck = [];

$i = $j = $k = 1;

foreach ($data as $key => $row) {
    switch ($key) {
        case($key % 3 === 0):
            $zaif[] = $row;
            $zaif[$i - 1]['id'] = $i;
            $i++;
            break;
        case($key % 3 === 1):
            $bitflyer[] = $row;
            $bitflyer[$j - 1]['id'] = $j;
            $j++;
            break;
        case($key % 3 === 2):
            $coincheck[] = $row;
            $coincheck[$k - 1]['id'] = $k;
            $k++;
            break;
    }
}

var_dump($zaif);

