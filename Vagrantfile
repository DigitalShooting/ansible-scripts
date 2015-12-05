# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
	config.vm.box = "debian/jessie64"
	config.vm.network :forwarded_port, guest: 3000, host: 3000

	# config.vm.synced_folder ".", "/opt/semaphore",
	#   type: "rsync",
	#   rsync__exclude: [".git", ".vagrant", "node_modules"],
	#   rsync__options: ["--verbose", "--archive", "--copy-links"]

	config.vm.provider "virtualbox" do |vb|
		# vb.gui = true
		vb.memory = 1024
		vb.cpus = 2
	end

	config.vm.provision :ansible do |ansible|
		ansible.groups = {
			"group1" => ["dsc"],
			# "group2" => ["machine2"],
			# "all_groups:children" => ["group1", "group2"]
		}
		ansible.playbook = "dsc.yaml"
		ansible.sudo = true
		ansible.extra_vars = {
			remote_user: 'vagrant',
			skip_networing: 'true',
		}
	end
end
