module.exports = {

	// Stand Title
	title: "Stand {{dsc_stand}}",
	id: "stand{{dsc_stand}}",

	// Scale for HTML Canvas (1=2kx2k, 2=1kx1k, 4=500x500, ...)
	scaleFactor: 2.7,

	printer: {
		// Printer name in cups
		name: "Printer1",
	},

	// Host Verein (Print log)
	hostVerein: {
		name: "{{dsc_verein}}",
		logoPath: __dirname + "/logo.png",
	},
};
