from math import sin, cos, sqrt, atan2, radians

# approximate radius of earth in km
R = 6373.0

class GeoService:

    @staticmethod
    def get_distance(lat1: str, lng1: str, lat2: str, lng2: str) -> float:
        lat1 = radians(float(lat1))
        lng1 = radians(float(lng1))
        lat2 = radians (float(lat2))
        lng2 = radians(float(lng2))

        dlon = lng2 - lng1
        dlat = lat2 - lat1

        a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))

        return R * c