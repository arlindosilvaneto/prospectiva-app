import { Address } from "../reducers/address.reducer";

const SERVICE_API_URL = 'http://localhost:9090/api/geolocation';

export const fetchAddressByString = async (address: string): Promise<Address> => {
    const response = await fetch(`${SERVICE_API_URL}/get/${address}`);

    if(response.ok) {
        return await response.json() as Address;
    }

    throw new Error('Could not get any address information');
}