// Query a single server with a backup
const queryServers = (serverName, q) => {
    const mainUrl = `/${serverName}?q=${q}`;
    const backupUrl = `/${serverName}_backup?q=${q}`;
    
    return Promise.race([
      getJSON(mainUrl),
      getJSON(backupUrl)
    ]);
  };
  const gougleSearch = async (q) => {
    const servers = ['web', 'image', 'video'];
    
    const searchPromise = Promise.all(
    //   servers.map(server => 
    //     queryServers(server, q).then(result => [server, result])
    //   )
    ).then(results => 
      Object.fromEntries(results)
    );
  
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('timeout')), 80);
    });
  
    return Promise.race([searchPromise, timeoutPromise]);
  };