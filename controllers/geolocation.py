from aiohttp import web
import requests
from services.google_service import GoogleService

class GeoLocationController:

    @staticmethod
    async def get_location_by_address(request):
        address = request.match_info.get('address')

        if address is None or len(address) < 10:
            raise web.HTTPBadRequest(reason='Address parameter must have more than 10 characters.')

        try: 
            response = GoogleService.get_address_info(address)

            return web.json_response(response)
        except requests.exceptions.RequestException as ex:
            return web.json_response({})
