import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import { withStyles } from '@material-ui/styles'

const CustomTableCell = withStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
}))(TableCell)
const useTableHeadStyle = makeStyles((theme) => ({
	tableCell: {
		background: theme.palette.grey['100'],

		fontSize: 20,
		fontWeight: 300,
	},
}))

const headCells = [
	{ id: 'id', numeric: true, disablePadding: false, label: 'id' },
	{
		id: 'name',
		numeric: false,
		disablePadding: true,
		label: 'Product',
	},
	{ id: 'code', numeric: true, disablePadding: false, label: 'Code' },
	{
		id: 'availability',
		numeric: true,
		disablePadding: false,
		label: 'Availability',
	},
	{
		id: 'needing_repair',
		numeric: true,
		disablePadding: false,
		label: 'Needs Repair',
	},
	{
		id: 'durability',
		numeric: true,
		disablePadding: false,
		label: 'Durability',
	},
	{ id: 'mileage', numeric: true, disablePadding: false, label: 'Mileage' },
]

export default function EnhancedTableHead(props) {
	const classes = useTableHeadStyle()
	const { order, orderBy, onRequestSort } = props
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property)
	}
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<CustomTableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
						className={classes.tableCell}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
						</TableSortLabel>
					</CustomTableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
