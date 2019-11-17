/**
 * EasyHTTP Library
 * Library for HTTP requests
 * 
 * 
 * @version 2.0.0
 * @author Amy
 * 
 * 
 */

 class EasyHTTP {

    //Make HTTP get request

     get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
     }


    // Make HTTP post request

    post(url, data) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))

        })

    }

    // Make HTTP put request

    put(url, data) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    //Make HTTP delete request

    delete(url) {

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:'DELETE',
                headers:{
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted or scheduled for deletion...'))
            .then(err => reject(err))
        })
    }

}