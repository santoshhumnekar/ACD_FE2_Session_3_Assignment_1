let dpApiConfig = {
    apiUrl: 'www.digitalportal.in', //object apiDetail
    data: 'some value',
    methodType: 'POST'
};

function callTheAPI(config) {
    let { url, methodType, data2 } = config; //ES6 using destructuring,
    $.ajax(url, methodType, data2);
}