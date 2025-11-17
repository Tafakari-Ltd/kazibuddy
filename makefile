.PHONY: build run stop clean logs

# Build the Docker image
build:
	docker-compose build

# Run the application
run:
	docker-compose up -d

# Stop the application
stop:
	docker-compose down

# Clean up (remove containers, images, volumes)
clean:
	docker-compose down -v --rmi all

# View logs
logs:
	docker-compose logs -f

# Run in development mode
dev:
	docker-compose -f docker-compose.dev.yml up

# Build and run production
prod: build run

# Check container status
status:
	docker-compose ps