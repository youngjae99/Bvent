export const getImageURI = (googleDriveURI) => {
    if(!googleDriveURI) return '';
    const t = googleDriveURI.split('/');
    const fileId = t[t.length - 2];
    return 'https://drive.google.com/uc?export=view&id=' + fileId;
}