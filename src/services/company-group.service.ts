
export type CompanyGroup = {
    id: string,
    name: string,
    status: string,
    accountCount: number
}

// Implementation code where T is the returned data shape
export  function api<CompanyGroup>(url: string): Promise<CompanyGroup> {
  const body = "Name";
  return  fetch(url, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
  
  // return  fetch(url, {
    //   method: 'GET',
    //   headers: 
    //   ({
    //       'Authorization': "WW91IG1hZGUgYSB0aW1lIG1hY2hpbmU/IE91dCBvZiBhIERlTG9yZWFuPw==",
    //       'X-FP-API-KEY': 'ApiKey', 
    //       'Content-Type': 'application/json'
    //   })
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error(response.statusText)
    //     }
    //     return response.json()
    //   })
  }
  
