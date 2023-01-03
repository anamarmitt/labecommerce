"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "bananinha",
        email: "ana@banana.com",
        password: "aaaA2",
    },
    {
        id: "pokemon",
        email: "poke@mon.com",
        password: "bananamon",
    },
];
exports.products = [
    {
        id: "01",
        name: "cacho de banana",
        price: 20,
        category: "fruta",
    },
    {
        id: "02",
        name: "cacho de pokemon",
        price: 200000,
        category: "entidade maligna",
    },
];
exports.purchases = [
    {
        userId: "bananinha",
        productId: "02",
        quantity: 1,
        totalPrice: 200000,
    },
    {
        userId: "pokemon",
        productId: "01",
        quantity: 2,
        totalPrice: 40,
    },
];
//# sourceMappingURL=database.js.map