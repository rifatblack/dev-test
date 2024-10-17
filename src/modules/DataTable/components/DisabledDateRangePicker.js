import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers'

import CustomToolbar from './CustomToolbarDatePicker'

export default function DisabledDateRangePicker({ startDate, endDate }) {
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justifyContent='space-around' direction='row'>
				<KeyboardDatePicker
					autoOk
					variant='inline'
					inputVariant='outlined'
					format='dd-MMM-yyyy'
					margin='normal'
					id='date-picker-inline'
					label='Start Date'
					value={new Date(startDate)}
					disabled
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					InputProps={{
						style: {
							fontSize: 12,
							height: 40,
							color: 'black',
						},
					}}
					ToolbarComponent={() => <CustomToolbar label='Start' />}
				/>
				<div style={{ width: '2rem' }}></div>
				<KeyboardDatePicker
					autoOk
					variant='inline'
					inputVariant='outlined'
					format='dd-MMM-yyyy'
					margin='normal'
					id='date-picker-inline'
					label='End Date'
					value={new Date(endDate)}
					disabled
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					InputProps={{
						style: {
							fontSize: 12,
							height: 40,
							color: 'black',
						},
					}}
					ToolbarComponent={() => <CustomToolbar label='End' />}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
