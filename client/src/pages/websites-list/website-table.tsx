import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import UrlLink from '@/components/url-link'
import { SimpleWebsite } from '@/types/response'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface TableProps {
  data: Array<SimpleWebsite>
}

const columnHelper = createColumnHelper<SimpleWebsite>()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span> S.N. </span>,
    cell: info => info.row.index + 1,
  }),
  columnHelper.accessor('name', {
    header: () => <span> Name </span>,
    cell: info => (
      <Link
        className="text-blue-500 duration-300 hover:text-red-500 hover:underline"
        to={`/website/${info.row.original.id}`}
      >
        {info.getValue()}
      </Link>
    ),
  }),
  columnHelper.accessor('url', {
    header: () => <span> URL </span>,
    cell: info => <UrlLink url={info.getValue()} />,
  }),
  columnHelper.accessor('accounts', {
    header: () => <span> No. of accounts </span>,
    cell: info => info.getValue(),
  }),
  columnHelper.display({
    id: 'actions',
    header: () => <span> Actions </span>,
    cell: () => <div> Test </div>,
  }),
]

const WebsiteListTable: FC<TableProps> = ({ data }) => {
  const [tableData] = useState(() => [...data])

  const { getHeaderGroups, getRowModel } = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const tableHeaders = getHeaderGroups()
  const tableRows = getRowModel()

  return (
    <div className="flex">
      <table className="mx-auto border-t border-t-slate-600">
        <thead>
          {tableHeaders.map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="bg-gray-700 px-10 py-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableRows.rows.map(row => (
            <tr className="odd:bg-blue-950" key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="border-y border-y-slate-600 px-10 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WebsiteListTable
