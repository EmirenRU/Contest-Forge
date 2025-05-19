compose:
	cd docker && docker-compose up --build --pull=never
add-hosts:
	@if ! grep -q "127.0.0.1 contest.rudn.ru" /etc/hosts; then \
	    echo "127.0.0.1 contest.rudn.ru" | sudo tee -a /etc/hosts; \
	fi

all: add-hosts compose
.PHONY: compose all add-hosts
