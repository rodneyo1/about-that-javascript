function findIP(dataSet) {
    // Regular expression for valid IP with optional port
    const ipPattern = /\b((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(:\d{1,5})?\b/g;
    let result = [];
    let match;
  
    while ((match = ipPattern.exec(dataSet)) !== null) {
      const ipPort = match[0];
      
      // If there's a port, validate it's between 0 and 65535
      if (ipPort.includes(':')) {
        const [ip, port] = ipPort.split(':');
        if (parseInt(port, 10) <= 65535) {
          result.push(ipPort); // valid IP and port
        }
      } else {
        result.push(ipPort); // valid IP without port
      }
    }
  
    return result;
  }
  
//   // Example usage:
//   const dataSet = "Some random text 192.168.1.1:8080 and 10.0.0.1. Invalid IP: 256.256.256.256:12345, and 172.16.254.1:65536.";
//   console.log(findIP(dataSet));
//   // Output: [ '192.168.1.1:8080', '10.0.0.1' ]
  