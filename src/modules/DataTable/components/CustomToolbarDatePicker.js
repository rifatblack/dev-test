import React from 'react'
import PickerToolbar from '@material-ui/pickers/_shared/PickerToolbar'
import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
	toolbar: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		height: 15,
	},
})

const CustomToolbar = function (props) {
	const { isLandscape, title } = props
	const classes = useStyles()

	return (
		<PickerToolbar
			className={classes.toolbar}
			title={title}
			isLandscape={isLandscape}
		>
			<h2 style={{ color: 'white', fontWeight: 300 }}>
				{props.label} Date
			</h2>
		</PickerToolbar>
	)
}

export default CustomToolbar
