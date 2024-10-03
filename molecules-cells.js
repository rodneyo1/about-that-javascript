function RNA(dna) {
    const complement = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
    return dna.split('').map(result => complement[result]).join('');
  }
  
  function DNA(rna) {
    const complement = {
      'C': 'G',
      'G': 'C',
      'A': 'T',
      'U': 'A'
    };
    return rna.split('').map(result => complement[result]).join('');
  }

  console.log((RNA('TAGC'), 'AUCG'))