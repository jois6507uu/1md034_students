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
	missingFields: true,
	myOrder: [],
	localOrder: {
	    details: {
		x: 0,
		y: 0
	    }
	},
	counter : 0,
	orders: {},
	customerInfoArray: null
    },
    created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));

	/* OBS Jag har försökt att köra utan dessa calls med 'socket.on' men då kan jag inte göra så att flera orders visas i dispatcher vyn, endast den senaste ordern visas. */
  },
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    console.log(lastOrder + 1);
	    return lastOrder + 1;
	    //return this.counter + 1;
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    if (!this.fullname || !this.email || !this.paymentmethod || !this.gender) {
		this.missingFields = true;
		
		
	    } else {
		this.missingFields = false;
		
		
		this.customerInfoArray = [this.fullname, this.email, this.paymentmethod, this.gender];
		
	    }
	    
	    socket.emit('addOrder', {orderId: this.getNext(), details: { x: this.localOrder.details.x, y: this.localOrder.details.y,},customerInformation: this.customerInfoArray,orderItems: this.myOrder,});
	    
	    console.log(this.orders[0]);

	},
	displayOrder: function ()
	{

	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    
	    this.localOrder.details.x = event.clientX - 10 - offset.x;
	    this.localOrder.details.y = event.clientY - 10 - offset.y;
	    
	    
	}
	
    }
})
