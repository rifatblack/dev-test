import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'

import CustomToolbar from './CustomToolbarDatePicker'
import { differenceInDays } from 'date-fns'

export default function DateRangePicker(props) {
	const [selectedStartDate, setSelectedStartDate] = React.useState(
		new Date().setHours(0, 0, 0, 0)
	)
	const [selectedEndDate, setSelectedEndDate] = React.useState(
		new Date().setHours(0, 0, 0, 0)
	)

	const handleStartDateChange = (date) => {
		setSelectedStartDate(date.setHours(0, 0, 0, 0))

		props.callBack({
			duration:
				differenceInDays(selectedEndDate, date.setHours(0, 0, 0, 0)) +
				1,
			startDate: date.setHours(0, 0, 0, 0),
			endDate: selectedEndDate,
		})
	}

	const handleEndDateChange = (date) => {
		setSelectedEndDate(date.setHours(0, 0, 0, 0))
		props.callBack({
			duration:
				differenceInDays(date.setHours(0, 0, 0, 0), selectedStartDate) +
				1,
			startDate: selectedStartDate,
			endDate: date.setHours(0, 0, 0, 0),
		})
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent='space-around' direction='row'>
				<KeyboardDatePicker
					autoOk
					variant='inline'
					minDate={new Date()}
					inputVariant='outlined'
					format='dd-MMM-yyyy'
					margin='normal'
					id='date-picker-inline'
					label='Start Date'
					value={selectedStartDate}
					onChange={handleStartDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					ToolbarComponent={() => <CustomToolbar label='Start' />}
				/>
				<div style={{ width: '2rem' }}></div>
				<KeyboardDatePicker
					autoOk
					variant='inline'
					minDate={selectedStartDate}
					inputVariant='outlined'
					format='dd-MMM-yyyy'
					margin='normal'
					id='date-picker-inline'
					label='End Date'
					value={selectedEndDate}
					onChange={handleEndDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					ToolbarComponent={() => <CustomToolbar label='End' />}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
