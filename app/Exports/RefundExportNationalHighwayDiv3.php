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

class RefundExportNationalHighwayDiv3 implements FromQuery, WithMapping, WithHeadings,WithColumnFormatting
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function query()
	{
		return Refund::where('refund_status','=', 1)->where('division_id','=', 16);   //we use get() because we call collection
	}


    public function map($refund): array
    {
        return [
            $refund->id,

            $refund->form_memo,
            $refund->ac_name,
            $refund->ac_number,
            $refund->ifsc,
            'Rs. '.$refund->deposit,
            Date::dateTimeToExcel($refund->created_at),
        ];
    }

    public function headings(): array
    {
        return [
            'Refund Id',

            'Memo',
            'AC Name',
            'A/C Number',
            'IFSC Code',
            'Deposit',
            'Date of Approval',
        ];
    }

    public function columnFormats(): array
    {
        return [
            'G' => NumberFormat::FORMAT_DATE_DDMMYYYY,
            // 'C' => NumberFormat::FORMAT_CURRENCY_EUR_SIMPLE,
        ];
    }
}
