<?php

$data = [];

$fp = fopen('bitcoin_exchange.csv', 'r');
while (($csv = fgetcsv($fp)) !== false) {
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
            unset($zaif[$i - 1]['name']);
            $zaif[$i - 1]['id'] = $i;
            $i++;
            break;
        case($key % 3 === 1):
            $bitflyer[] = $row;
            unset($bitflyer[$i - 1]['name']);
            $bitflyer[$j - 1]['id'] = $j;
            $j++;
            break;
        case($key % 3 === 2):
            $coincheck[] = $row;
            unset($coincheck[$i - 1]['name']);
            $coincheck[$k - 1]['id'] = $k;
            $k++;
            break;
        default:
            break;
    }
}

//var_dump($zaif);

$files = [
    'zaif' => $zaif,
    'bitflyer' => $bitflyer,
    'coincheck' => $coincheck,
];

foreach ($files as $filename => $exchange) {
    $f = fopen("{$filename}.csv", 'w');
    foreach ($exchange as $line) {
        fputcsv($f, $line);
    }
    fclose($f);
}

//file_put_contents('./zaif.csv', $zaif);

