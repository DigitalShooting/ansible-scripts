module.exports = {

	// enable/ disable sql backups
	enabled: true,

	// MySQL connection params
	mysql: {
		host     : "127.0.0.1",
		user     : "dsc",
		password : "{{mysql_dsc_password}}",
		database : "dsc",
	},
}
