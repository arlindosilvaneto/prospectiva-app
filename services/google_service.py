import requests
import config as settings
from typing import Dict, List
import random

class GoogleService:
    
    @staticmethod
    def get_address_info(address: str):
        geo_location = requests.get(f'{settings.GOOGLE_GEOCODE_URL}{address}')

        return GoogleService.translate_address_info(geo_location.json())

    @staticmethod
    def translate_address_info(google_response: List[Dict[str, any]] = []) -> Dict[str, any]:
        if google_response['status'] != 'OK' or len(google_response.get('results', [])) == 0:
            return {}

        info = google_response.get('results')[0]

        location = info.get('geometry', {}).get('location', {})
        lat = location.get('lat', 0)
        lng = location.get('lng', 0)

        return {
            'address': info.get('formatted_address', ''),
            'lat': lat,
            'lng': lng,
            'picture': GoogleService.get_address_image(lat, lng) if lat != 0 else '',
        }

    @staticmethod
    def get_address_image(lat: float, lng: float) -> str:
        base_url = 'https://maps.googleapis.com/maps/api/staticmap?'

        color = [
            'red', 'green', 'blue', 'yellow', 'brown', 'pink'
        ][random.randint(0, 5)]
        
        params = [
            f'center={lat},{lng}',
            'zoom=13',
            "size=600x300",
            "maptype=roadmap",
            f"markers=color:{color}%7c{lat},{lng}",
            f"key={settings.GOOGLE_API_KEY}"
        ]

        return f"{base_url}{'&'.join(params)}"
