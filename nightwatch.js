require('babel-register')();

module.exports = {
	"src_folders": ["./source/e2e/tests"],
	"output_folder": "./source/e2e/reports",
	"custom_commands_path": "",
	"custom_assertions_path": "",
	"page_objects_path": "",
	"globals_path": "",

	"request_timeout_options": {
		"timeout": 10000,
		"retry_attempts": 2
	},

	"selenium": {
		"start_process": false,
		"server_path": "./source/e2e/utils/_dependencies/selenium-server-standalone-3.0.1.jar",
		"log_path": "",
		"port": 4444,
		"cli_args": {
			"webdriver.chrome.driver": "./node_modules/.bin/chromedriver"
		}
	},

	"test_settings": {
		"default": {
			"launch_url": "http://localhost",
			"selenium_port": 4444,
			"selenium_host": "localhost",
			"silent": true,
			"screenshots": {
				"enabled": false,
				"path": ""
			},
			"desiredCapabilities": {
				"browserName": "chrome",
				"chromeOptions" : {
          "args" : ["start-fullscreen", "disable-web-security", "test-type", "--no-sandbox"]
        }
			}
		},

		"chrome": {
			"desiredCapabilities": {
				"browserName": "chrome"
			}
		}
	}
}
