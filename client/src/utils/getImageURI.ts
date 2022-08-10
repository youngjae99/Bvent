export const getImageURI = (init) => {
    const t = init.split('/');
    const fileId = t[t.length - 2];
    return 'https://drive.google.com/uc?export=view&id=' + fileId;
}