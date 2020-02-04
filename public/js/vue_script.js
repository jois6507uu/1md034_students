

const vm = new Vue({
  el: 'main',
    data: {
	food,
	fullname: null,
	email: null,
	street: null,
	house: null,
	paymentmethod: '',
	gender: 3,
	genderName: null,
	missingFields: false,
	orders: [],
	customerInfoArray: null
    },
    methods: {
	makeOrder: function ()
	{
	    if (!this.fullname || !this.email || !this.street || !this.house || !this.paymentmethod || !this.gender) {
		this.missingFields = true;
		return;
	    }
	    
	    this.missingFields = false;
	    
	    switch(this.gender) {
	    case 1:
		this.genderName = "Male";
		break;
	    case 2:
		this.genderName = "Female";
		break;
	    case 3:
		this.genderName = "Do not wish to provide";
		break;
	    }
	    
	    this.customerInfoArray = [this.fullname, this.email, this.street, this.house, this.paymentmethod, this.gender, this.orders];
	    //return this.customerInfoArray;
	}
    }
})
