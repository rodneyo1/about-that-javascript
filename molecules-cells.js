function DNAtoRNA(dna) {
    return dna.replace(/T/g, 'U');
  }
  
  function RNAtoDNA(rna) {
    return rna.replace(/U/g, 'T');
  }