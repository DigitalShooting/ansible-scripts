dsc_key=$(openssl rand -base64 64 | shasum -a 256 | cut -b 1-30)
mysql_root_password=$(openssl rand -base64 64 | shasum -a 256 | cut -b 1-64)
mysql_dsc_password=$(openssl rand -base64 64 | shasum -a 256 | cut -b 1-64)

sed -i.ba \
	-e "s/.*dsc_key:.*/dsc_key: \"$dsc_key\"/" \
	-e "s/.*mysql_root_password:.*/mysql_root_password: \"$mysql_root_password\"/" \
	-e "s/.*mysql_dsc_password:.*/mysql_dsc_password: \"$mysql_dsc_password\"/" \
	config/dsc.yaml
