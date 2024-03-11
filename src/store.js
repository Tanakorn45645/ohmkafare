import Vue from "vue";
import Vuex from "vuex";

const state = {
    specials : [
        {
            image: "/img/show.jpg",
            text: "ลด 50 % สำหรับลูกค้าที่ใช้บริการครั้งแรก"
            
        },
        {
            image: "/img/show2.jpg",
            text: "ลด 50 % สำหรับลูกค้าที่ใช้บริการครั้งแรก"
        },
        {
            image: "/img/show3.jpg",
            text: "ลด 50 % สำหรับลูกค้าที่ใช้บริการครั้งแรก"
        }
        
    ],
    menus: [
        {
            image: "/img/1.jpg",
            text: "RG UNICORN GUNDAM",
            price: 1290,
            love: true
        },
        {
            image: "/img/2.jpg",
            text: "RG GOD GUNDAM",
            price: 1190,
            love: false
        },
        {
            image: "/img/3.jpg",
            text: "EG BUILD STRIKE EXCEED GALAXY",
            price: 380,
            love: false
        },
        {
            image: "/img/4.jpg",
            text: "RG DESTINY GUNDAM",
            price: 850,
            love: false
        },
        {
            image: "/img/5.jpg",
            text: "RG MSM-07S Z'GOK",
            price: 850,
            love: false
        },
        {
            image: "/img/6.jpg",
            text: "RG GUNDAM EXIA (EXTRA FINISH)",
            price: 2250,
            love: false
        },
        {
            image: "/img/7.jpg",
            text: "RG RX-78-2 GUNDAM",
            price: 850,
            love: true
        },
        {
            image: "/img/8.jpg",
            text: "RG MS-06S ZAKU II",
            price: 850,
            love: true
        }
    ],
    orders : [],
    orderInfo: null
};

const getters = {
    specials(state) {
        return state.specials;
    },
    menus(state) {
        return state.menus;
    },
    haveOrders(state) {
        return state.orders.length > 0;
    },
    numberOfOrders(state) {
        return state.orders.length;
    },
    orders(state) {
        return state.orders;
    }
};

const mutations = {
    ADD_ORDER(state, order) {
        state.orders.push(order);
    },
    DELETE_ORDER(state, index) {
        state.orders.splice(index, 1);
    },
    SUBMIT_ORDER(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
    CLEAR_ORDER(state) {
        state.orders = [];
    }
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    getters,
    mutations
});

export default store;