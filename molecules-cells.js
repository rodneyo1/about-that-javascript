function RNA(dna) {
   dna= dna.replace(/A/g, 'U');
   dna= dna.replace(/T/g, 'A');
    return dna;
  }
  
  function DNA(rna) {
   rna= rna.replace(/A/g, 'T');
   rna= rna.replace(/U/g, 'A');
    return rna;
  }

//   console.log(RNA('TAGC'))