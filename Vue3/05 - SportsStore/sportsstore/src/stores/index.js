import { defineStore } from 'pinia'
import Axios from "axios";

const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export const useSportsStore = defineStore('sports', {
    state: () => ({
        products: [],
        categoriesData: [],
        productsTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "All"
    }),
    getters: {
        productsFilteredByCategory: (state) => 
            state.products.filter(p => state.currentCategory == "All" 
                || p.category == state.currentCategory),
        processedProducts() {
            let index = (this.currentPage - 1) * this.pageSize;
            return this.productsFilteredByCategory.slice(index, 
                index + this.pageSize);
        },
        pageCount() {
            return Math.ceil(this.productsFilteredByCategory.length / this.pageSize);
        },
        categories: (state) => ["All", ...state.categoriesData]
    },
    actions: {
        setCurrentPage(page) {
            this.currentPage = page;
        },
        setPageSize(size) {
            this.pageSize = size;
            this.currentPage = 1;
        },
        setCurrentCategory(category) {
            this.currentCategory = category;
            this.currentPage = 1;
        },
        setData(data) {
            this.products = data.pdata;
            this.productsTotal = data.pdata.length;
            this.categoriesData = data.cdata.sort();
        },
        async getData() {
            let pdata = (await Axios.get(productsUrl)).data;
            let cdata = (await Axios.get(categoriesUrl)).data;
            this.setData({ pdata, cdata });
        }
    }
});