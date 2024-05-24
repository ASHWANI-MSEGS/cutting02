<?php

namespace App\Exports;

use App\Form;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class FormsExport implements FromCollection, WithMapping, WithHeadings, WithColumnFormatting, WithMultipleSheets
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Form::all();
    }
    public function map($form): array
    {
        return [
            'Form name '.$form->name,
            Date::dateTimeToExcel($form->created_at),
        ];
    }

    public function headings(): array
    {
        return [
            'Form Name',
            'Date',
        ];
    }

    public function columnFormats(): array
    {
        return [
            'B' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'C' => NumberFormat::FORMAT_CURRENCY_EUR_SIMPLE,
        ];
    }
}
