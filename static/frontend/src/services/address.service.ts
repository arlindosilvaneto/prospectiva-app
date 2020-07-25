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