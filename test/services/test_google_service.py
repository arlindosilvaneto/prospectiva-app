from unittest import TestCase
from services.google_service import GoogleService
import json
import os

class TestGoogleService(TestCase):
    def setUp(self):
        with open(os.path.join(os.getcwd(), 'test/services/fixtures/google_api_response.json')) as response:
            self.google_response = json.load(response)

    def test_correct_value_translation(self):
        expected = {
            'address': 'R. Santos Dumont, 742 - Vila Rica, Sabar\u00e1 - MG, 34585-050, Brazil',
            'lat': -19.8854666,
            'lng': -43.8537075
        }

        result = GoogleService.translate_address_info(self.google_response)

        self.assertEqual(expected, result)

    def test_invalid_status(self):
        result = GoogleService.translate_address_info({'status': 'Error'})

        self.assertEqual({}, result)

    def test_invalid_results(self):
        result = GoogleService.translate_address_info({'status': 'OK', 'result': []})

        self.assertEqual({}, result)
