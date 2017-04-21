module.exports = {
{% for client in dsc_gateway_clients %}
	"{{client.id}}": {
		_id: "{{client.id}}",
		label: "{{client.label}}",
		labelShort: "{{client.labelShort}}",
		user: "",
		ip: "{{client.ip}}",
		port: "{{client.port}}",
		mac: "{{client.mac}}",
	},
{% endfor %}
};
