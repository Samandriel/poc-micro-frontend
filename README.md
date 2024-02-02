This is a sample micro-frontend development environment with Docker.
Demonstrates how to use Docker to manage multiple frontend projects with different frameworks (Svelte, React etc.).
The projects will be hosted under the same domain using nginx as reverse proxy.

# Objective

- Users should be able to seamlessly navigate between the different pages residing in different projects without noticing the difference.
- The localStorage and cookies data should be accessible across the web applications regardless of the framework used.

# Setup

First time or when update files outside directories defined in `volume` in `docker-compose.yml` .

```bash
docker-compose build && docker-compose up
```

When update files inside directories defined in `volume` in `docker-compose.yml` .

```bash
docker-compose up
```

# How it works

1. The `docker-compose.yml` file defines the services to be used in the development environment.
2. The `nginx` service is used as a reverse proxy to route requests to the different frontend projects.
3. Both Svelte and NextJS is hosted as Server Side Rendering (SSR).
4. NextJS will be served at root path `/` and Svelte will be served at `/v1`.
5. The nginx is configured to run on port 80 and can be accessed at `http://localhost`.
