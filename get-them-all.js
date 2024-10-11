export const getArchitects = () => {
    // Select all <a> tags inside <body>
    const allATags = Array.from(document.querySelectorAll('body a'));
    
    // Select all elements inside <body> but exclude <a> and <div> tags
    const allOtherTags = Array.from(document.querySelectorAll('body *')).filter(el => el.tagName !== 'A' && el.tagName !== 'DIV' && el.tagName !== 'BUTTON');
    
    return [allATags, allOtherTags];
  };
  
  
  export const getClassical = () => {
    const [allATags] = getArchitects();
    const classicalArchitects = allATags.filter(a => a.classList.contains('classical'));
    const nonClassicalArchitects = allATags.filter(a => !a.classList.contains('classical'));
    return [classicalArchitects, nonClassicalArchitects];
  };
  
  export const getActive = () => {
    const [classicalArchitects] = getClassical();
    const activeClassicalArchitects = classicalArchitects.filter(architect => architect.classList.contains('active'));
    const nonActiveClassicalArchitects = classicalArchitects.filter(architect => !architect.classList.contains('active'));
    return [activeClassicalArchitects, nonActiveClassicalArchitects];
  };
  
  export const getBonannoPisano = () => {
    const [activeClassicalArchitects] = getActive();
    const bonannoPisano = activeClassicalArchitects.find(architect => architect.id === 'BonannoPisano');
    const remainingArchitects = activeClassicalArchitects.filter(architect => architect.id !== 'BonannoPisano');
    return [bonannoPisano, remainingArchitects];
  };