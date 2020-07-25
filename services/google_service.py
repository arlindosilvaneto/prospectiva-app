import requests
import config as settings
from typing import Dict, List

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

        return {
            'address': info.get('formatted_address', ''),
            'lat': location.get('lat', 0),
            'lng': location.get('lng', 0)
        }
