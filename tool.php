<?php

interface CsvProcessor
{
    public function run(): void;
}

class BitcoinChartCsvProcessor implements CsvProcessor
{
    public function run(): void
    {
        $data = self::read('bitcoin_exchange');
        [$zaif, $bitflyer, $coincheck] = self::split($data);
        self::write([$zaif, $bitflyer, $coincheck]);
    }

    private static function read(string $filename): array
    {
        $data = [];
        $fp   = fopen("data/{$filename}.csv", 'r');
        while (($csv = fgetcsv($fp)) !== false) {
            $data[] = [
                'id'       => $csv[0],
                'name'     => $csv[1],
                'buy'      => $csv[2],
                'datetime' => $csv[3],
            ];
        }
        fclose($fp);
        return $data;
    }

    private static function split(array $data): array
    {
        $zaif = $bitflyer = $coincheck = [];
        $i    = $j = $k = 0;

        foreach ($data as $key => $row) {
            switch ($key) {
                case($key % 3 === 0):
                    $zaif[] = $row;
                    unset($zaif[$i]['name']);
                    $zaif[$i]['id'] = $i+1;
                    $i++;
                    break;
                case($key % 3 === 1):
                    $bitflyer[] = $row;
                    unset($bitflyer[$i]['name']);
                    $bitflyer[$j]['id'] = $j+1;
                    $j++;
                    break;
                case($key % 3 === 2):
                    $coincheck[] = $row;
                    unset($coincheck[$i]['name']);
                    $coincheck[$k]['id'] = $k+1;
                    $k++;
                    break;
                default:
                    break;
            }
        }

        return [$zaif, $bitflyer, $coincheck];
    }

    private static function write(array $targets): void
    {
        $files = [
            'zaif'      => $targets[0],
            'bitflyer'  => $targets[1],
            'coincheck' => $targets[2],
        ];

        foreach ($files as $filename => $exchange) {
            $f = fopen("data/{$filename}.csv", 'w');
            foreach ($exchange as $line) {
                fputcsv($f, $line);
            }
            fclose($f);
        }
    }
}

(new BitcoinChartCsvProcessor())->run();
