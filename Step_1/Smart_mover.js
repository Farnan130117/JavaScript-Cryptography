//'private' variable

var orderId = 123;

// expose methods and variables by attaching them

// to the global object

window.orderModule = {

getOrderId: function(){

//brought to you by closures

return orderId;

}

};

})()