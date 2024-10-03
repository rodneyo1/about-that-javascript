function RNA(dna) {
    return dna.replace(/T/g, 'U');
  }
  
  function DNA(rna) {
    return rna.replace(/U/g, 'T');
  }