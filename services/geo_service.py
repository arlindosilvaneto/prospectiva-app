from math import sin, cos, sqrt, atan2, radians

# approximate radius of earth in km
R = 6373.0

class GeoService:

    @staticmethod
    def get_distance(lat1: float, lng1: float, lat2: float, lng2: float) -> float:
        dlon = lng2 - lng1
        dlat = lat2 - lat1

        a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
        c = 2 * atan2(sqrt(a), sqrt(1 - a))

        return R * c