import { makeStyles, alpha } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		marginTop: 40,
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2),
		paddingTop: 20,
	},
	table: {
		minWidth: 750,
	},
	container: {
		height: window.innerHeight * 0.5,
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1,
	},

	tableCell: {
		background: 'yellow',
	},
	tableRowTrue: {
		cursor: 'pointer',
		'&.Mui-selected, &.Mui-selected:hover': {
			backgroundColor: alpha(theme.palette.primary.main, 0.2),
		},
	},
	tableRowFalse: {
		cursor: 'pointer',
		'&.Mui-selected, &.Mui-selected:hover': {
			backgroundColor: alpha(theme.palette.secondary.main, 0.1),
		},
	},
	avialabiltyCell: {},
	searchContainer: {
		display: 'flex',
		background: '#6beefa',
		'& h2': {
			display: 'flex',
			margin: 0,
			marginLeft: 20,
			fontWeight: 300,
			alignItems: 'center',
		},
	},

	searchBar: {
		margin: 20,
		width: 300,
	},
	avialabiltyChip: {
		height: 25,
		width: 60,
		fontWeight: 'bold',
	},

	tableFooterContainer: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
	},
}))

export default useStyles
