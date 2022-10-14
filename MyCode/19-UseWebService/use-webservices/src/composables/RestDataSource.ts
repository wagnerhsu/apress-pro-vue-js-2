import Axios from "axios";
import { useMitt } from '@/composables/useMitt'
import type { Product } from "@/models/Product";
const baseUrl = "http://localhost:3500/products/";
export class RestDataSource {

    constructor() {

    }
    async getProducts() {
        return (await this.sendRequest("GET", baseUrl)).data as Promise<Product[]>;
    }
    async saveProduct(product: Product) {
        await this.sendRequest("POST", baseUrl);
    }
    async updateProduct(product: Product) {
        await Axios.put<Product>(`${baseUrl}${product.id}`, product);
    }
    async deleteProduct(product: Product) {
        await Axios.delete<Product>(`${baseUrl}${product.id}`, { data: product });
    }
    async sendRequest(httpMethod: string, url: string, product?: Product) {
        const mitt = useMitt();
        try {
            return await Axios.request({
                method: httpMethod,
                url: url,
                data: product
            });
        } catch (err: any) {
            if (err.response) {
                mitt.emit("httpError",
                    `${err.response.statusText} - ${err.response.status}`);
            } else {
                mitt.emit("httpError", "HTTP Error");
            }
            throw err;
        }
    }
}
