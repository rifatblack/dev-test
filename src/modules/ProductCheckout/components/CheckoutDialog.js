import React from 'react'
import Button from '@material-ui/core/Button'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { DialogContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import DialogActions from '@material-ui/core/DialogActions'
import DateRangePicker from '../../DataTable/components/DateRangePicker'
import DisabledDateRangePicker from '../../DataTable/components/DisabledDateRangePicker'
import ProductInfo from '../../../components/ProductInfo'
import ModalFooterSection from '../../../modal/ModalFooterSection'
import MileageInputForReturn from '../../../components/MileageInputForReturn'
import { DifferenceInDay } from '../../../Calculation/DifferenceInDay'
import { IntegerValidation } from '../../../Calculation/BookingCost'

const useStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},

	dialogContents: {
		minWidth: 400,
	},
	formControl: {
		width: '100%',
		marginBottom: '2rem',
	},
	dialog: {
		width: 400,
	},
	header: {
		background: theme.palette.grey['300'],
		padding: 15,
		fontWeight: 300,
		fontSize: 20,
	},
}))

export default function CheckoutDialog({
	open,
	handleCloseBook,
	dataList,
	product,
	handleChange,
	setTimeRange,
	timeRange,
	setConfirmationOpen,
	buttonType,
	mileAgeAdded,
	setMileAgeAdded,
}) {
	const classes = useStyles()
	const checkButtonDisability = () => {
		if (buttonType === 'book')
			return (
				timeRange.duration < 0 ||
				timeRange.duration < product.minimum_rent_period ||
				product.discount
			)
		else if (buttonType === 'return')
			return product.type === 'meter' && !IntegerValidation(mileAgeAdded)
	}
	return (
		<Dialog
			onClose={handleCloseBook}
			aria-labelledby='simple-dialog-title'
			open={open}
			maxWidth={'md'}
		>
			{' '}
			<DialogTitle id='simple-dialog-title'>
				{buttonType === 'book' ? 'Book a product' : 'Return a product'}
			</DialogTitle>
			<DialogContent className={classes.dialogContents}>
				<FormControl variant='filled' className={classes.formControl}>
					<InputLabel id='demo-simple-select-filled-label'>
						Product
					</InputLabel>
					{
						<Select
							labelId='demo-simple-select-filled-label'
							id='demo-simple-select-filled'
							value={product.id}
							onChange={handleChange}
						>
							<h1 className={classes.header}>
								{buttonType === 'book'
									? 'Book a product'
									: 'Return a product'}
							</h1>
							{product &&
								dataList.map((item) => {
									return (
										<MenuItem
											value={item.id}
											disabled={
												buttonType === 'return'
													? item.availability
													: !item.availability
											}
											key={item.id}
										>
											{item.name + '/' + item.code}
										</MenuItem>
									)
								})}
						</Select>
					}
				</FormControl>

				<ProductInfo product={product} />
				{buttonType === 'return' && product.type === 'meter' && (
					<MileageInputForReturn
						mileAgeAdded={mileAgeAdded}
						setMileAgeAdded={setMileAgeAdded}
					/>
				)}

				{buttonType === 'book' && (
					<DateRangePicker callBack={(e) => setTimeRange(e)} />
				)}

				{buttonType === 'return' &&
					product.startDate &&
					product.endDate && (
						<DisabledDateRangePicker
							startDate={product.startDate}
							endDate={product.endDate}
						/>
					)}

				{(buttonType === 'book' ||
					(buttonType === 'return' && product.startDate)) && (
					<ModalFooterSection
						duration={
							buttonType === 'return' && product.startDate
								? DifferenceInDay(
										product.startDate,
										product.endDate
								  )
								: timeRange.duration
						}
						product={product}
					/>
				)}
			</DialogContent>
			<DialogActions>
				<Button color='primary' onClick={handleCloseBook}>
					Cancel
				</Button>
				<Button
					color='primary'
					autoFocus
					onClick={() => setConfirmationOpen(true)}
					disabled={checkButtonDisability()}
				>
					{buttonType === 'return' ? 'Return' : 'Book'}
				</Button>
			</DialogActions>
		</Dialog>
	)
}
