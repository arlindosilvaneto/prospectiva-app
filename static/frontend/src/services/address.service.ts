import { Address } from "../reducers/address.reducer";

const SERVICE_API_URL = 'http://localhost:9090/api/geolocation';

export const fetchAddressByString = async (address: string): Promise<Address> => {
    const response = await fetch(`${SERVICE_API_URL}/get/${address}`);

    if(response.ok) {
        const data = await response.json();

        if(!data.address) {
            throw new Error('The given address could not be found.');
        }

        return data as Address;
    }

    throw new Error(response.statusText || 'Could not get any address information');
}

export const fetchDistance = async(source: Address, destination: Address): Promise<number> => {
    const {lat: lat1, lng: lng1} = source;
    const {lat: lat2, lng: lng2} = destination;
    
    const response = await fetch(`${SERVICE_API_URL}/distance?lat1=${lat1}&lng1=${lng1}&lat2=${lat2}&lng2=${lng2}`);

    if(response.ok) {
        const data = await response.json();

        if(!data.distance) {
            throw new Error('The given address could not be found.');
        }

        return data.distance as number;
    }

    return -1;
}
