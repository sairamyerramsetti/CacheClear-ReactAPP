import packageJson from '../package.json';

export const clearCaching = ()=> {       
    let version = localStorage.getItem('version');
    let message = ''; 

    if(version !== packageJson.version) {
        if('caches' in window) {
            caches.keys().then((names) => {
                names.forEach(name => {
                    caches.delete(name);
                });
            });         
        }

        /*
            Commented below line for verifying the Cache confirmation message from UI. 
            Actual implemnatation we need this change for refreshing the screen after cache clear
        */

        //window.location.reload();
        localStorage.clear();
        localStorage.setItem('version', packageJson.version);   
        message = `Cache is cleared succesfully at ${new Date()}`;          
    }

    return message;   
};