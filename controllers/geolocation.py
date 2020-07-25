from aiohttp import web
import requests
from services.google_service import GoogleService
from services.geo_service import GeoService

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

    @staticmethod
    async def get_distance(request):
        query = request.query

        lat1 = query['lat1']
        lng1 = query['lng2']
        lat2 = query['lat2']
        lng2 = query['lng2']

        if not lat1 or not lng1 or not lat2 or not lng2:
            raise web.HTTPBadRequest(reason='We request 4 query parameters all point coordinates (lat1, lng1, lat2, lng2)')

        return web.json_response({'distance': GeoService.get_distance(lat1, lng1, lat2, lng2)})
