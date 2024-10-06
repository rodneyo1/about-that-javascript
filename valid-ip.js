function findIP(str) {
    // Regular expression that matches valid IP addresses with optional ports
    return str.match(
        /(?!(((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}):(?!(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5})))((((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4})(?::(?![7-9]\d\d\d\d)(?!6[6-9]\d\d\d)(?!65[6-9]\d\d)(?!655[4-9]\d)(?!6553[6-9])(?!0+)(\d{1,5}))?)/g
    ) || [];
}

//   // Example usage:
//   const dataSet = "Some random text 192.168.1.1:8080 and 10.0.0.1. Invalid IP: 256.256.256.256:12345, and 172.16.254.1:65536.";
//   console.log(findIP(dataSet));
//   // Output: [ '192.168.1.1:8080', '10.0.0.1' ]
  