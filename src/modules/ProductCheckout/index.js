import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import CheckoutDialog from './components/CheckoutDialog'
import ConfirmationDialog from '../../Calculation/ConfirmationDialog'
import ButtonGroup from './components/ButtonGroup'
import { storeBooking } from '../../localStorage/storeBooking'
import { storeReturn } from '../../localStorage/storeReturn'

const initTimeRange = { duration: 1, startDate: null, endDate: null }

export default function ProductCheckout({
	dataList,
	selectedRow,
	updateTable,
}) {
	const [open, setOpen] = React.useState(false)
	const [product, setProduct] = React.useState(null)
	const [timeRange, setTimeRange] = React.useState({ ...initTimeRange })
	const [confirmationOpen, setConfirmationOpen] = React.useState(false)
	const [buttonType, setButtonType] = React.useState(null)
	const [mileAgeAdded, setMileAgeAdded] = React.useState(null)
	const [showNotification, setNotificationOpen] = React.useState(false)

	React.useEffect(() => {
		setProduct(selectedRow)
		setTimeRange({ ...initTimeRange })
	}, [selectedRow])

	const handleCloseConfirmation = (e) => {
		setConfirmationOpen(false)
		if (e === 'success') {
			if (buttonType === 'book')
				storeBooking({ ...product }, { ...timeRange })
			else storeReturn({ ...product }, mileAgeAdded)
			updateTable()
			setOpen(false)
		}
	}

	const handleChange = (event) => {
		const index = dataList.findIndex(
			(item) => selectedRow && item.id === event.target.value
		)
		setProduct(dataList[index])
	}

	const handleCloseCheckoutDialog = () => {
		setOpen(false)
	}

	const handleOpenCheckoutDialog = (buttonType) => {
		setButtonType(buttonType)
		if (buttonType === 'book' && selectedRow.durability < 1) {
			setNotificationOpen(true)
			return
		}
		setOpen(true)
	}

	return (
		<div>
			<ButtonGroup
				handleOpenCheckoutDialog={handleOpenCheckoutDialog}
				selectedRow={selectedRow}
			/>

			{product && (
				<CheckoutDialog
					open={open}
					handleCloseBook={handleCloseCheckoutDialog}
					dataList={dataList}
					product={product}
					handleChange={handleChange}
					setTimeRange={setTimeRange}
					timeRange={timeRange}
					setConfirmationOpen={setConfirmationOpen}
					buttonType={buttonType}
					mileAgeAdded={mileAgeAdded}
					setMileAgeAdded={(value) => setMileAgeAdded(value)}
				/>
			)}

			<ConfirmationDialog
				open={confirmationOpen}
				handleClose={handleCloseConfirmation}
				product={product}
				timeRange={timeRange}
				buttonType={buttonType}
			/>

			<Snackbar
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				open={showNotification}
				onClose={() => setNotificationOpen(false)}
				message='Product is not durable to book'
				autoHideDuration={3000}
			/>
		</div>
	)
}
