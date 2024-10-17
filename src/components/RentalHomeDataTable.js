import React from 'react'
import { makeStyles } from '@material-ui/core'
import EnhancedTable from '../modules/DataTable'
import ProductCheckout from '../modules/ProductCheckout'
import Data from '../data/Data.json'
import Snackbar from '@material-ui/core/Snackbar'

function insertIDs(data) {
	let temp = []
	data.map((item, index) => {
		temp = [...temp, { ...item, id: index }]
		return item
	})
	return temp
}

function initDataFromLocalStorage(data) {
	if (!localStorage.getItem('dataList')) {
		localStorage.setItem('dataList', JSON.stringify(insertIDs(data)))
	}
	const fetchedData = JSON.parse(localStorage.getItem('dataList'))

	return fetchedData
}

const useStyles = makeStyles((theme) => ({
	root: {
		width: '80%',
	},
	localStorageParagraph: {
		textAlign: 'left',
		fontFamily: 'monospace',
		fontSize: 12,
		textDecoration: 'underline',
		cursor: 'pointer',
		marginLeft: 10,
	},
}))

export default function RentalHomeDataTable() {
	const classes = useStyles()
	const [rows, setRows] = React.useState(initDataFromLocalStorage(Data))
	const [selectedProduct, setSelectedProduct] = React.useState(null)
	const [showNotification, setNotificationOpen] = React.useState(false)

	const callBackForTable = (data) => {
		setSelectedProduct(data)
	}

	const updateTable = () => {
		const fetchedFromLocalStorage = JSON.parse(
			localStorage.getItem('dataList')
		)

		setRows(fetchedFromLocalStorage)
		setSelectedProduct(null)
		setNotificationOpen(true)
	}

	return (
		<div className={classes.root}>
			<EnhancedTable
				dataList={rows}
				selectedProduct={selectedProduct}
				callBackForTable={callBackForTable}
			/>
			<ProductCheckout
				dataList={rows}
				selectedRow={selectedProduct}
				updateTable={updateTable}
			/>
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={showNotification}
				onClose={() => setNotificationOpen(false)}
				message='Rental Info Updated'
				autoHideDuration={3000}
			/>
		</div>
	)
}
