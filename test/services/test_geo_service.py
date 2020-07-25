from unittest import TestCase
from math import radians
from services.geo_service import GeoService

class TestGeoService(TestCase):

    def test_distance(self):
        lat1 = '52.2296756'
        lng1 = '21.0122287'
        lat2 = '52.406374'
        lng2 = '16.9251681'
        
        distance = GeoService.get_distance(lat1, lng1, lat2, lng2)

        self.assertAlmostEqual(278.546, distance, places=3)
