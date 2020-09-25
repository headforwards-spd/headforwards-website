const preventOrphans = text => (text || '').replace(/([\w,;:]) ([^ ]*)$/gm, '$1\xa0$2');

export default preventOrphans;
