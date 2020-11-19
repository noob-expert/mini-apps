const header="http://localhost:3001";

export function request(url,data={}) {
        return new Promise((resolve,reject)=>{
            wx.request({
                url: header+url,
                data,
                method: 'GET', 
                success: function(res){
                    resolve(res)
                },
                fail: function(err) {
                   reject(error)
                }
            })
        })
    }