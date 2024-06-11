import { Api } from '@/service/axios';

class ServiceExample {
    async func() {
        const response = await Api.post('');
        return response.data;
    }
}

export const serviceExample = new ServiceExample();