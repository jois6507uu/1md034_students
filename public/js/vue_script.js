'use strict';
const socket = io();


const vm = new Vue({
    el: 'main',
    data: {
	food,
	fullname: null,
	email: null,
	paymentmethod: '',
	gender: "Not Provided",
	genderName: null,
	missingFields: false,
	myOrder: [],
	order: {
	    details: {
		x: 0,
		y: 0
	    }
	},
	counter: 0,
	orders: {},
	customerInfoArray: null
    },
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    /*let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;*/
	    return this.counter + 1;
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */

	    /*
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };*/
	    

	    socket.emit('addOrder', {
		orderId: this.getNext(),
		
		details: {
		    /*x: event.clientX - 10 - offset.x,*/
		    /*y: event.clientY - 10 - offset.y,*/
		    x: this.order.details.x,
		    y: this.order.details.y,
		},
		orderItems: this.myOrder,
	    });
	},
	displayOrder: function ()
	{
	    /*
	    if (!this.fullname || !this.email || !this.paymentmethod || !this.gender) {
		this.missingFields = true;
		
		
	    } else {
		this.missingFields = false;
		

	    */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    
	    this.order.details.x = event.clientX - 10 - offset.x;
	    this.order.details.y = event.clientY - 10 - offset.y;
	    
	    
	    console.log('x: ' + this.order.details.x + ', y: ' + this.order.details.y);
		
	    }
	    
	    
	    
	
	
    }
 
})
