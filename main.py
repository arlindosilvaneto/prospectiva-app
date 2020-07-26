from aiohttp import web
from aiohttp_index import IndexMiddleware
from controllers.geolocation import GeoLocationController
import settings
import aiohttp_cors

app = web.Application()

# setup index.html handler middleware
app = web.Application(middlewares=[IndexMiddleware()])

# CORS Setup
aiohttp_cors.setup(app, defaults={
    "*": aiohttp_cors.ResourceOptions(
            allow_credentials=True,
            expose_headers="*",
            allow_headers="*",
        )
})

get_address_from_string_route = app.router.add_route('GET', '/api/geolocation/get/{address}', GeoLocationController.get_location_by_address)
app['aiohttp_cors'].add(get_address_from_string_route)

get_distance_route = app.router.add_route('GET', '/api/geolocation/distance', GeoLocationController.get_distance)
app['aiohttp_cors'].add(get_distance_route)

app.router.add_static('/', 'static/frontend/build')

if __name__ == '__main__':
    web.run_app(app, port=settings.SERVER_PORT)
