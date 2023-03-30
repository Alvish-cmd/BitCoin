import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Horizontal from '../Navbar/Horizontal';
import Vertical from '../Navbar/Vertical';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'


interface dataObj {
market: string;
change_24_hour: number;
low: number;
high: number;
last_price: number;
volume: number;
bid: number;
ask: number;
timestamp: number;
}



const columns = [
    { field: 'baseAsset', headerName: 'Name', width: 180 },
    {
        field: 'openPrice',
        headerName: 'Open Price',
        type: 'number',
        width: 140,
    },

//   https://api.wazirx.com/sapi/v1/tickers/24hr
  {
      field: 'lowPrice',
      headerName: 'Low Price ',
      width: 180,
      type: 'number',
    },
    {
        field: 'highPrice',
        headerName: 'High Price',
        width: 180,
        type: 'number',
      },
      {
        field: 'volume',
        headerName: 'Volume',
        width: 180,
        type: 'number',
      },
      {
        field: 'bidPrice',
        headerName: 'Bid Price',
        width: 180,
        type: 'number',
      },
    
    ];
    
    export default function Dashboard() {
    const [cPrice , setCPrice] = useState<dataObj[]>([])
    const Price = async () => 
    {
        const response = await fetch(
        "https://api.wazirx.com/sapi/v1/tickers/24hr",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          
          },
        }
        );
        const data = await response.json();
        setCPrice(data);
    }; 
        useEffect(() => {
        let interval = setInterval(() => {
        Price();
        }, 13000);
        return () => {
        clearInterval(interval);
        };
        }, []); 
  return (
    <>
    <Horizontal></Horizontal>
    <Vertical></Vertical>
    <div style={{ height: 400, width: '100vw'}}>
       <DataGrid 
            rows={cPrice}
            columns={columns}
            getRowId={(row: any) =>  row.baseAsset + `${row.openPrice}` + row.lowPrice + row.highPrice + row.volume + row.bidPrice}
         />
    </div>
    </>
  );
}

// const data = [
//   { x: new Date(2021, 1, 1), high: 100, low: 80, open: 90, close: 95 },
//   { x: new Date(2021, 1, 2), high: 110, low: 90, open: 100, close: 100 },
//   { x: new Date(2021, 1, 3), high: 120, low: 300, open: 30, close: 115 },
//   { x: new Date(2021, 1, 4), high: 130, low: 0, open: 115, close: 120 },
//   { x: new Date(2021, 1, 5), high: 140, low: 120, open: 120, close: 135 }
// ];