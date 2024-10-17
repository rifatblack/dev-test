import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Chip from '@material-ui/core/Chip'
import SearchBar from 'material-ui-search-bar'
import EnhancedTableHead from './components/EnhancedTableHeads'
import useStyles from './styles/tableStyle'
import { getComparator, stableSort } from './utils/tableUtils'
import { withStyles } from '@material-ui/styles'
import TablePagination from '@material-ui/core/TablePagination'

const CustomTableCell = withStyles((theme) => ({
	root: {
		textAlign: 'center',
	},
}))(TableCell)

export default function EnhancedTable({ dataList, callBackForTable }) {
	const classes = useStyles()
	const [rows, setRows] = React.useState([])
	const [order, setOrder] = React.useState('asc')
	const [orderBy, setOrderBy] = React.useState('id')
	const [page, setPage] = React.useState(0)
	const [dense] = React.useState(false)
	const [rowsPerPage, setRowsPerPage] = React.useState(20)
	const [selectedRow, setSelectedRow] = React.useState(null)
	const [searched, setSearched] = React.useState('')

	React.useEffect(() => {
		setSelectedRow(dataList[0])
		callBackForTable(dataList[0])
		setRows(dataList)
		cancelSearch()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataList])

	const requestSearch = (searchedVal) => {
		setSearched(searchedVal)
		const filteredRows = dataList.filter((row) => {
			return JSON.stringify(row)
				.toLowerCase()
				.includes(searchedVal.toLowerCase())
		})
		setRows(filteredRows)
	}

	const cancelSearch = () => {
		setSearched('')
		setRows(dataList)
	}

	const handleChangePage = (event, newPage) => {
		setPage(newPage)
	}

	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === 'asc'
		setOrder(isAsc ? 'desc' : 'asc')
		setOrderBy(property)
	}

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10))
		setPage(0)
	}

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<div className={classes.searchContainer}>
					<h2>Rental Software</h2>

					<SearchBar
						value={searched}
						onChange={(searchVal) => requestSearch(searchVal)}
						onCancelSearch={() => cancelSearch()}
						className={classes.searchBar}
					/>
				</div>
				<TableContainer className={classes.container}>
					<Table
						stickyHeader={true}
						className={classes.table}
						aria-labelledby='tableTitle'
						size={dense ? 'small' : 'medium'}
						aria-label='sticky table'
					>
						<EnhancedTableHead
							order={order}
							orderBy={orderBy}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
						<TableBody className={classes.tableBody}>
							{stableSort(rows, getComparator(order, orderBy))
								.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
								)
								.map((row, index) => {
									const labelId = `enhanced-table-checkbox-${index}`

									return (
										<TableRow
											hover
											role='checkbox'
											tabIndex={-1}
											key={row.id}
											className={
												selectedRow &&
												selectedRow.availability
													? classes.tableRowTrue
													: classes.tableRowFalse
											}
										>
											<CustomTableCell align='left'>
												{row.id}
											</CustomTableCell>
											<CustomTableCell
												component='th'
												id={labelId}
												scope='row'
												padding='none'
												align='center'
											>
												{row.name}
											</CustomTableCell>
											<CustomTableCell align='right'>
												{row.code}
											</CustomTableCell>
											<CustomTableCell
												align='right'
												className={
													classes.avialabiltyCell
												}
												style={{
													color: row.availability
														? '##A30000'
														: '#5BE37D',
												}}
											>
												<Chip
													label={
														row.availability
															? 'Yes'
															: 'No'
													}
													color={
														row.availability
															? 'primary'
															: 'secondary'
													}
													className={
														classes.avialabiltyChip
													}
													variant='outlined'
												/>
											</CustomTableCell>
											<CustomTableCell align='right'>
												{row.needing_repair.toString()}
											</CustomTableCell>
											<CustomTableCell align='right'>
												{row.durability} /{' '}
												{row.max_durability}
											</CustomTableCell>
											<CustomTableCell align='right'>
												{row.mileage === null
													? 'NA'
													: row.mileage}
											</CustomTableCell>
										</TableRow>
									)
								})}
							{emptyRows > 0 && (
								<TableRow
									style={{
										height: (dense ? 33 : 53) * emptyRows,
									}}
								>
									<TableCell colSpan={6} />
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 20, 25]}
					component='div'
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	)
}
