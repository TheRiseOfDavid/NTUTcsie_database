let PROTO_PATH = "./entpb.proto"
var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');


// Suggested options for similarity to existing grpc.load behavior
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

var protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
// The protoDescriptor object has the full package hierarchy
var routeguide = protoDescriptor.routeguide;

let stub = new routeguide.RouteGuide('220.135.101.179:50051', grpc.credentials.createInsecure());
var data = {id : 1, name : "david", password : "david", email : "david53133@email.com", address : "台北市"};



const testGrcp = function () {
    stub.User(data, function(err, ans){
        if(err){
            console.log("ERROR!");
        }
        else{
            console.log(ans);
        }
    });
    return {ans};
};


 export default testGrcp ;
  