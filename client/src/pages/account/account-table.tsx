import { FC, useState } from 'react'

import PasswordText from '@/components/password-text'
import UrlLink from '@/components/url-link'
import { Account } from '@/types/response'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface TableProps {
  data: Array<Account>
}

const columnHelper = createColumnHelper<Account>()

const columns = [
  columnHelper.accessor('id', {
    header: () => <span> S.N. </span>,
    cell: info => info.row.index + 1,
  }),
  columnHelper.accessor('userName', {
    header: () => <span> User name</span>,
    cell: info => <span> {info.getValue()}</span>,
  }),
  columnHelper.accessor('email', {
    header: () => <span> Email </span>,
    cell: info => <span> {info.getValue()}</span>,
  }),
  columnHelper.accessor('websiteName', {
    header: () => <span> Website name </span>,
    cell: info => <span> {info.getValue()}</span>,
  }),
  columnHelper.accessor('websiteUrl', {
    header: () => <span> Website URL </span>,
    cell: info => <UrlLink url={info.getValue()} />,
  }),
  columnHelper.accessor('password', {
    header: () => <span> Password </span>,
    cell: info => <PasswordText text={info.getValue()} />,
  }),
  columnHelper.display({
    id: 'actions',
    header: () => <span> Actions </span>,
    cell: () => <div> Test </div>,
  }),
]

const AccountTable: FC<TableProps> = ({ data }) => {
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
      <table className="mx-auto overflow-auto border-t border-t-slate-600">
        <thead>
          {tableHeaders.map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="bg-surface-mixed-200 px-10 py-4">
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
            <tr className="" key={row.id}>
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

export default AccountTable
