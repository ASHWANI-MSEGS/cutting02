<?php

namespace App\Exports;

use App\Refund;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromQuery;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\NumberFormat;
use Maatwebsite\Excel\Concerns\WithColumnFormatting;

class RefundsExport implements FromQuery, WithMapping, WithHeadings,WithColumnFormatting
{
    /**
    * @return \Illuminate\Support\Collection
    */
    // public function collection()
    // {
    //     return Refund::all();
    // }

    public function query()
	{
		return Refund::where('refund_status','=', 1)->where('division_id','=', 1);   //we use get() because we call collection
	}


    public function map($refund): array
    {
        return [
            'ID '.$refund->id,
            'Deposit'.$refund->deposit,
            Date::dateTimeToExcel($refund->created_at),
        ];
    }

    public function headings(): array
    {
        return [
            'ID',
            'Deposit',
            'Date of Approval',
        ];
    }

    public function columnFormats(): array
    {
        return [
            'C' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'C' => NumberFormat::FORMAT_CURRENCY_EUR_SIMPLE,
        ];
    }
}
